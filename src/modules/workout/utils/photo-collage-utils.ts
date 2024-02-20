import * as fabric from "fabric";
import {
  Canvas,
  CollageSlot,
  CollageTemplate,
  CustomImageObject,
  Dimensions,
  Image,
  LockedObjectType,
  Rect,
} from "./photo-collage-types";

export class PhotoCollageUtils {
  private static MAX_PANEL_WIDTH = 1080;
  /// Currently we are using 1/1 image ration, but it is possible to change
  private static WIDTH_RATIO = 9;
  private static HEIGHT_RATIO = 12;

  /**
   * Build a new fabric canvas object with given dimensions.
   */
  static buildCanvas(
    canvasElement: HTMLCanvasElement,
    dimensions: Dimensions
  ): Canvas {
    return new fabric.Canvas(canvasElement, {
      width: dimensions.width,
      height: dimensions.height,
      selection: false,
      allowTouchScrolling: true,
      controlsAboveOverlay: false,
      imageSmoothingEnabled: false,
      backgroundColor: "#1a1a1a",
    });
  }

  /**
   * Builds a new fabric react for given slot.
   */
  static buildCanvasSlot(slotProperties: CollageSlot): Rect {
    const objectLocked = PhotoCollageUtils.getObjectLocked();
    return new fabric.Rect(slotProperties).set(objectLocked);
  }

  /**
   * Builds a new fabric image for slot.
   */
  static async buildCanvasPhoto(
    imageBase64: string,
    config: CollageTemplate,
    slot: Rect
  ): Promise<Image> {
    const image = await fabric.Image.fromURL(imageBase64);
    image.set({
      id: `image_${new Date().getTime()}`,
      top: slot.top,
      left: slot.left,
      clipPath: slot,
      selectable: true,
      hasControls: true,
      perPixelTargetFind: true,
    }) as CustomImageObject;

    /// Scale accordingly to look good
    if (config.scaleTo === "width") {
      image.scaleToWidth(slot.width + 1);
    } else if (config.scaleTo === "height") {
      image.scaleToHeight(slot.height + 1);
    }

    return image;
  }

  /**
   * Calculate the panel width to be 640px for large screens or screen width - 24px
   * for small screens.
   */
  static calculatePanelWidth(screenWidth: number): number {
    if (screenWidth > PhotoCollageUtils.MAX_PANEL_WIDTH) {
      return PhotoCollageUtils.MAX_PANEL_WIDTH;
    }

    const panelWidth = screenWidth - 24; // 24px margin
    return panelWidth;
  }

  /**
   * Calculate canvas with respecting aspect ratio.
   */
  static calculateWidthByAspectRatio(exactWidth: number): Dimensions {
    return {
      width: exactWidth,
      height: Math.round(
        (exactWidth / PhotoCollageUtils.WIDTH_RATIO) *
          PhotoCollageUtils.HEIGHT_RATIO
      ),
    };
  }

  /**
   * The default collage template "two vertical portrait photos"
   */
  static getCollageTemplate(): Array<CollageTemplate> {
    return [
      {
        drawCollageSlot: (canvasWidth: number, canvasHeight: number) => ({
          top: -1,
          left: -1,
          width: canvasWidth * 0.5 + 1,
          height: canvasHeight + 1,
          fill: "#1a1a1a",
          hoverCursor: "pointer",
          absolutePositioned: true,
        }),
        scaleTo: "height",
      },
      {
        drawCollageSlot: (canvasWidth: number, canvasHeight: number) => ({
          top: -1,
          left: canvasWidth * 0.5 - 1,
          width: canvasWidth * 0.5 + 1,
          height: canvasHeight + 1,
          fill: "#2a2a2a",
          hoverCursor: "pointer",
          absolutePositioned: true,
        }),
        scaleTo: "height",
      },
    ];
  }

  static getObjectLocked(): LockedObjectType {
    return {
      selectable: false,
      hasControls: false,
      lockRotation: true,
      lockScalingX: true,
      lockScalingY: true,
      lockSkewingX: true,
      lockSkewingY: true,
      lockMovementX: true,
      lockMovementY: true,
      lockScalingFlip: true,
    };
  }
}

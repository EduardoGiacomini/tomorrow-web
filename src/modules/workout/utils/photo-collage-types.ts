import type { Image } from "fabric";
export type { Canvas, Image, Rect } from "fabric";

export interface Dimensions {
  width: number;
  height: number;
}

export interface CollageSlot {
  top: number;
  left: number;
  width: number;
  height: number;
  fill: string;
  hoverCursor: string;
  absolutePositioned: boolean;
}

export interface CollageTemplate {
  drawCollageSlot: (canvasWidth: number, canvasHeight: number) => CollageSlot;
  scaleTo: string;
}

export interface LockedObjectType {
  lockMovementX: boolean;
  lockMovementY: boolean;
  lockRotation: boolean;
  lockScalingFlip: boolean;
  lockScalingX: boolean;
  lockScalingY: boolean;
  lockSkewingX: boolean;
  lockSkewingY: boolean;
  hasControls: boolean;
  selectable: boolean;
}

export type CustomImageObject = Image & {
  id: string;
};

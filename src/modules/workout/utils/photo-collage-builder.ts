import { Canvas, Dimensions } from "./photo-collage-types";
import { PhotoCollageUtils } from "./photo-collage-utils";

export class PhotoCollageBuilder {
  private canvas!: Canvas;
  private dimensions!: Dimensions;

  buildCanvas(
    canvasElement: HTMLCanvasElement,
    panelElement: HTMLDivElement
  ): this {
    /// Calculate canvas ratio by initial client width (do not handle screen resize)
    const maxPannelWidth = panelElement.clientWidth;
    const panelWidth = PhotoCollageUtils.calculatePanelWidth(maxPannelWidth);
    const dimensions =
      PhotoCollageUtils.calculateWidthByAspectRatio(panelWidth);

    /// Setup canvas
    const canvas = PhotoCollageUtils.buildCanvas(canvasElement, dimensions);

    /// Set class properties
    this.dimensions = dimensions;
    this.canvas = canvas;

    return this;
  }

  buildSlots(inputElement: HTMLInputElement): this {
    /// Setup canvas slots and properties
    const template = PhotoCollageUtils.getCollageTemplate();
    template.forEach((config) => {
      const slotProperties = config.drawCollageSlot(
        this.dimensions.width,
        this.dimensions.height
      );
      const slot = PhotoCollageUtils.buildCanvasSlot(slotProperties);

      /// Attach event handler to upload photo
      slot.on("mouseup", () => {
        /// Define image upload event handler
        const handleImageUpload = (
          callback: (e: ProgressEvent<FileReader>) => void
        ) => {
          inputElement.onchange = async (event) => {
            const target = event.target as HTMLInputElement;
            const file = target.files && target.files[0];
            if (!file) return;

            /// Load uploaded file as Base64
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = (e) => {
              callback(e);
            };
          };

          inputElement.click();
          inputElement.value = "";
        };
        handleImageUpload(async (e: ProgressEvent<FileReader>) => {
          const base64 = e.target?.result as string;

          /// Load image as fabric image
          const image = await PhotoCollageUtils.buildCanvasPhoto(
            base64,
            config,
            slot
          );

          /// Render iamge in canvas
          this.canvas.remove(slot);
          this.canvas.add(image);
          this.canvas.setActiveObject(image);
          this.canvas.renderAll();
        });
      });

      /// Render slot in canvas
      this.canvas.add(slot);
    });
    return this;
  }

  build(): Canvas {
    /// Render all objects in canvas
    this.canvas.renderAll();
    return this.canvas;
  }
}

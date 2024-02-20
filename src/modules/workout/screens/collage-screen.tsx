import React from "react";
import { Button, Stack } from "@mui/material";
import { PhotoCollageBuilder, Canvas } from "../utils";

export function CollageScreen(): React.ReactElement {
  const linkRef = React.useRef<HTMLAnchorElement | null>(null);
  const wrapperRef = React.useRef<HTMLDivElement | null>(null);
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);
  const inputRef = React.useRef<HTMLInputElement | null>(null);

  const [canvas, setCanvas] = React.useState<Canvas | null>(null);

  React.useEffect(() => {
    if (!canvasRef.current || !wrapperRef.current || !inputRef.current) return;

    const photoCollageBuilder = new PhotoCollageBuilder();
    const photoCollageCanvas = photoCollageBuilder
      .buildCanvas(canvasRef.current, wrapperRef.current)
      .buildSlots(inputRef.current)
      .build();
    setCanvas(photoCollageCanvas);

    return () => {
      setCanvas(null);
      photoCollageCanvas.dispose();
    };
  }, []);

  const download = () => {
    if (canvas && linkRef.current) {
      canvas.discardActiveObject();
      linkRef.current.href = canvas.toDataURL();
      linkRef.current.download = `collage-${new Date().getTime()}.png`;
      linkRef.current.click();
      alert("Success");
    } else {
      alert("Error");
    }
  };

  return (
    <Stack>
      <Stack ref={wrapperRef}>
        <Stack
          py={2}
          display="flex"
          alignItems="center"
          justifyContent="center"
          className="sm:min-h-screen"
        >
          <canvas ref={canvasRef} />
        </Stack>
        <Stack visibility="hidden">
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            style={{ visibility: "hidden" }}
          />
        </Stack>
      </Stack>
      <a ref={linkRef} id="download" className="hidden"></a>
      <Button variant="contained" onClick={download}>
        Download
      </Button>
    </Stack>
  );
}

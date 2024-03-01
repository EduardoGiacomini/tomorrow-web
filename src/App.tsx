import { Container } from "./components";
import { Router } from "./routes";

export function App(): React.ReactElement {
  return (
    <Container>
      <Router />
    </Container>
  );
}

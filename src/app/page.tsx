import FirstComponent from "@/components/FirstComponent";
import { css } from "../../styled-system/css";

export default function Home() {
  return (
    <main className={css({ fontSize: "2xl", fontWeight: "bold" })}>
      Hello 🐼!
      <FirstComponent />
    </main>
  );
}

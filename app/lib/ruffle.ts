export const RUFFLE_SCRIPT_ID = "ruffle-player";
export const RUFFLE_SCRIPT_SRC = "https://unpkg.com/@ruffle-rs/ruffle";

type RuffleWindow = Window & { Ruffle?: unknown };

export function loadRuffleScript(): Promise<void> {
  if (typeof window === "undefined") {
    return Promise.resolve();
  }
  const w = window as RuffleWindow;
  if (w.Ruffle) {
    return Promise.resolve();
  }
  return new Promise((resolve, reject) => {
    const markReady = (el: HTMLScriptElement) => {
      el.dataset.ruffleReady = "1";
      resolve();
    };
    const existing = document.getElementById(
      RUFFLE_SCRIPT_ID
    ) as HTMLScriptElement | null;
    if (existing) {
      if (existing.dataset.ruffleReady === "1" || w.Ruffle) {
        resolve();
        return;
      }
      existing.addEventListener("load", () => markReady(existing), {
        once: true,
      });
      existing.addEventListener(
        "error",
        () => reject(new Error("Ruffle script failed to load")),
        { once: true }
      );
      return;
    }
    const script = document.createElement("script");
    script.id = RUFFLE_SCRIPT_ID;
    script.src = RUFFLE_SCRIPT_SRC;
    script.async = true;
    script.onload = () => markReady(script);
    script.onerror = () => reject(new Error("Ruffle script failed to load"));
    document.body.appendChild(script);
  });
}

export function appendRuffleEmbed(
  host: HTMLElement,
  options: { src: string; width: string; height: string }
): void {
  // Ruffle upgrades <embed> to <ruffle-embed>. Guarding only on "embed" lets a
  // second append run after upgrade and retriggers Ruffle (multiple SWF loads).
  if (host.firstElementChild) return;
  const embed = document.createElement("embed");
  embed.setAttribute("width", options.width);
  embed.setAttribute("height", options.height);
  embed.src = options.src;
  host.appendChild(embed);
}

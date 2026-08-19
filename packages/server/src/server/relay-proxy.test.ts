import { SocksProxyAgent } from "socks-proxy-agent";
import { afterEach, expect, test, vi } from "vitest";
import { withRelayProxy } from "./relay-proxy";

afterEach(() => vi.unstubAllEnvs());

test("preserves WebSocket options without a relay proxy", () => {
  const options = { handshakeTimeout: 10_000 };
  expect(withRelayProxy(options)).toBe(options);
});

test("adds the configured SOCKS relay proxy", () => {
  vi.stubEnv("PASEO_RELAY_PROXY", "socks5h://127.0.0.1:6768");
  expect(withRelayProxy({}).agent).toBeInstanceOf(SocksProxyAgent);
});

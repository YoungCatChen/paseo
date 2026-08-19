import { SocksProxyAgent } from "socks-proxy-agent";
import type { ClientOptions } from "ws";

export function withRelayProxy(options: ClientOptions): ClientOptions {
  const proxyUrl = process.env.PASEO_RELAY_PROXY?.trim();
  return proxyUrl ? { ...options, agent: new SocksProxyAgent(proxyUrl) } : options;
}

import { getAssetFromKV } from '@cloudflare/kv-asset-handler';

addEventListener('fetch', (event) => {
  event.respondWith(handleEvent(event));
});

async function handleEvent(event) {
  try {
    return await getAssetFromKV(event);
  } catch (e) {
    const url = new URL(event.request.url);
    return await getAssetFromKV(event, {
      mapRequestToAsset: () => new Request(`${url.origin}/index.html`, event.request),
    });
  }
}
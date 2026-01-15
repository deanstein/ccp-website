// Load and export the site's image metadata (image-meta-registry.json)
//
// This module imports image-meta-registry.json, 
// upgrades and post-processes each image entry via upgradeImageMetaRegistry, 
// then exports the resulting registry for use across the site

import imageMetaRegistryJson from './image-meta-registry.json' with { type: 'json' };

/*** TEMPORARILY DISABLED UNTIL jdg-ui-svelte v2.0.0 IS CONSUMED
import { upgradeImageMetaRegistry } from '$lib/jdg-utils.js';

// Upgrade the registry - this upgrades and post-processes each imageMeta
const imageMetaRegistry = upgradeImageMetaRegistry(imageMetaRegistryJson);

export default imageMetaRegistry;
***/

const imageMetaRegistry = imageMetaRegistryJson;
export default imageMetaRegistry;

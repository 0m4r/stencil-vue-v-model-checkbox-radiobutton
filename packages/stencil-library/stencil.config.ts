import { angularOutputTarget } from '@stencil/angular-output-target';
import { vueOutputTarget, ComponentModelConfig } from '@stencil/vue-output-target';

import { Config } from '@stencil/core';

const vueComponentModels: ComponentModelConfig[] = [
  {
    elements: ['my-input', 'my-select'],
    event: 'myChange',
    targetAttr: 'value',
  },
  {
    elements: ['my-checkbox', 'my-radio'],
    event: 'myChange',
    targetAttr: 'checked',
  }
];

export const config: Config = {
  namespace: 'stencil-library',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
    angularOutputTarget({
      componentCorePackage: 'stencil-library',
      directivesProxyFile: '../angular-library/projects/stencil-library/src/lib/stencil-generated/components.ts',
      directivesArrayFile: '../angular-library/projects/stencil-library/src/lib/stencil-generated/index.ts',
    }),
    vueOutputTarget({
      componentCorePackage: 'stencil-library',
      proxiesFile: '../vue-library/lib/components.ts',
      componentModels: vueComponentModels,
    }),
  ],
};

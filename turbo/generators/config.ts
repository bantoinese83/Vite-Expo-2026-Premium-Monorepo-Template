import type { PlopTypes } from "@turbo/gen";

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  plop.setGenerator("ui-component", {
    description: "Adds a new shared UI component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is the name of the component? (e.g. MyButton)",
      },
    ],
    actions: [
      {
        type: "add",
        path: "packages/ui/src/atoms/{{pascalCase name}}.tsx",
        templateFile: "templates/component.hbs",
      },
      {
        type: "append",
        path: "packages/ui/src/index.tsx",
        template: 'export * from "./atoms/{{pascalCase name}}";',
      },
    ],
  });
}

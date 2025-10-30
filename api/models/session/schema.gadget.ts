import type { GadgetModel } from "gadget-server";

// This file describes the schema for the "session" model, go to https://ajsdkjasdjaklsjdlkajdj.gadget.app/edit to view/edit your model in Gadget
// For more information on how to update this file http://docs.gadget.dev

export const schema: GadgetModel = {
  type: "gadget/model-schema/v2",
  storageKey: "HClg--dYPQpc",
  fields: {
    roles: {
      type: "roleList",
      default: ["unauthenticated"],
      storageKey: "3CZVt8AU0zyD",
    },
  },
};

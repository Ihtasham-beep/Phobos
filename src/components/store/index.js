
import { texture } from "three/src/nodes/accessors/TextureNode.js";
import { create } from "zustand";

const UseMacBookStore = create((set) => ({
  color: "#2e2c2e",
  scale: 0.08,

  setColor: (color) => set({ color }),
  setScale: (scale) => set({ scale }), 

  texture : '/videos/feature-1.mp4',
  setTexture : (texture) => set({texture}),

  reset: () => set({ color: "#2e2c2e", scale: 0.08 , texture:'/videos/feature-1.mp4'}),
}));

export default UseMacBookStore;
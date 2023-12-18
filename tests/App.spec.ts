// App.spec.ts
import { mount } from "@vue/test-utils"
import { describe, it, expect } from "vitest"
import App from "../src/App.vue"

describe("App", () => {
    it("toggles", () => {
        const wrapper = mount(App)
        expect(wrapper.element.tagName).toBe("DIV")
        expect(wrapper.vm.editButton).toBeFalsy()
    });
});


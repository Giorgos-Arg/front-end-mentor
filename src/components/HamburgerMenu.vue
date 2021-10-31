<template>
  <Popover class="relative h-0">
    <PopoverButton
      class="
        bg-gray-100
        h-7
        w-7
        p-1
        transition-all
        ease-in-out
        fixed
        top-0
        left-0
        inline-flex
        cursor-pointer
        items-center
        justify-center
        m-4
        group-hover:bg-gray-200
        rounded-md
      "
    >
      <MenuIcon />
    </PopoverButton>

    <transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="opacity-0 translate-y-1"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition ease-in duration-150"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-1"
    >
      <PopoverPanel
        class="
          absolute
          z-10
          left-1/2
          transform
          -translate-x-1/2
          mt-3
          px-2
          w-screen
          max-w-md
          sm:px-0
        "
      >
        <div
          class="
            rounded-lg
            shadow-lg
            ring-1 ring-black ring-opacity-5
            overflow-hidden
          "
        >
          <div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
            <a
              v-for="item in solutions"
              :key="item.name"
              :href="item.href"
              class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
            >
              <component
                :is="item.icon"
                class="flex-shrink-0 h-6 w-6 text-gray-900"
                aria-hidden="true"
              />
              <div class="ml-4">
                <p class="text-base font-medium text-gray-900">
                  {{ item.name }}
                </p>
              </div>
            </a>
          </div>
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
</template>

<script lang="ts">
import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/vue";
import { HomeIcon, CursorClickIcon, XIcon } from "@heroicons/vue/outline";
import { MenuIcon } from "@heroicons/vue/solid";

const solutions = [
  {
    name: "Home",
    href: "/",
    icon: HomeIcon,
  },
  {
    name: "Order Summary Component",
    href: "OrderSummaryComponent",
    icon: CursorClickIcon,
  },
];

export default {
  components: {
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
    MenuIcon,
    XIcon,
    HomeIcon,
  },
  setup() {
    return {
      solutions,
    };
  },
};
</script>

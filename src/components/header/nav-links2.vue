<template>
  <div class="nav-links">
    <ul class="nav-links__list">
      <li
        v-for="(item, index) in items"
        ref="items"
        :key="index"
        :class="[
          'nav-links__item',
          {
            'nav-links__item--has-submenu': item.submenu,
            'nav-links__item--hover': item === hoveredItem,
          },
        ]"
        @mouseenter="onItemMouseEnter(item)"
        @mouseleave="onItemMouseLeave(item)"
      >
        <AppLink class="nav-links__item-link" :to="item.url">
          <div class="nav-links__item-body">
            {{ item.name }}
            <ArrowRoundedDown9x6Svg
              v-if="item.submenu"
              class="nav-links__item-arrow"
            />
          </div>
        </AppLink>
        <div
          v-if="item.children && item.children.length"
          ref="submenus"
          :class="[
            'nav-links__submenu',
            'nav-links__submenu--type--menu',
            {
              'nav-links__submenu--display': item === hoveredItem,
              'nav-links__submenu--open': item === hoveredItem,
            },
          ]"
        >
          <!-- <NavLinks2 :items="items"></NavLinks2> -->
          <Menu :items="item.children" @itemClick="onSubmenuItemClick(item)" />
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" src="./nav-links2.ts" />

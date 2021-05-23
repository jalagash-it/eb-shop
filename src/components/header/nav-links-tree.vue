<template>
  <ul>
    <NavLinksTreeItem
      v-for="item in tree"
      :key="item.id"
      :item="item"
    ></NavLinksTreeItem>
  </ul>
</template>
<script lang="ts" src="./nav-links-tree.ts" />
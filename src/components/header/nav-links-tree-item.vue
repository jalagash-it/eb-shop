<template>
  <li>
    <AppLink to="/">
      {{ item ? item.name : "-" }}
    </AppLink>
  </li>
</template>
<script lang="ts" src="./nav-links-tree-item.ts" />
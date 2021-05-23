import { Vue, Component, Prop } from "vue-property-decorator";
import NavLinksTreeItem from "./nav-links-tree-item"
@Component({
  components: {
    NavLinksTreeItem
  },
  data() {
    return { isOpen: false };
  },

  computed: {
    tree() {
      return this.$store.getters["category/tree"]
    },
  },
  methods: {
    toggle: function () {
      this.$data.isOpen = !this.$data.isOpen;
    },
  },
})
export default class NavLinksTree extends Vue {
  // @Prop({ type: String, required: true }) item!: string;

}
import { Vue, Component, Prop } from "vue-property-decorator";
import AppLink from "~/components/shared/app-link.vue";

@Component({
  props: {
    items: {
      type: Object,
      default: null
    }
  },
  components: {
    AppLink
  },
  name: 'NavLinksTreeItem',
  data() {
    return { isOpen: false };
  },
  methods: {
    toggle: function () {
      this.$data.isOpen = !this.$data.isOpen;
    },
  },
})
export default class NavLinksTreeItem extends Vue {
  @Prop({ type: Object, default: null }) item!: string;

}
<template>
  <ul class="tree-menu">
    <li v-for="(item, index) in data" :key="index">
      <span @click="toggle(item, index)" class="item">
        <i :class="['icon', item.children && item.children.length ? folderIconList[index] : 'file-text', loading ? loadingIconList[index] : '']"></i>
        {{ item[name] || item.menuName }}
      </span>
      <tree-menu v-if="scope[index]" :data="item.children"></tree-menu>
    </li>
  </ul>
</template>
 
<script>
export default {
  name: 'treeMenu',
  props: {
    data: Array,
    name: String,
    loading: Boolean
  },
  data () {
    return {
      folderIconList: [],
      loadingIconList: [],
      scope: {}
    }
  },
  created () {
    this.data.forEach((item, index) => {
      if (item.children && item.children.length) {
        this.folderIconList[index] = 'folder';
      }
    });
  },
  methods: {
    doTask (index) {
      this.$set(this.scope, index, !this.scope[index]);
      this.folderIconList[index] = this.scope[index] ? 'folder-open' : 'folder';
    },
    toggle (item, index) {
      this.loadingIconList = [];
      if (item.children && item.children.length) {
        this.doTask(index);
      } else {
        this.loadingIconList[index] = 'loading';
        this.$emit('getSubMenu', item, (subMenuList) => {
          if (subMenuList && subMenuList.length) {
            this.doTask(index);
          }
        });
      }
    }
  }
}
</script>
 
<style scoped lang="scss">
.tree-menu {
  list-style: none;
  width: 222px;
}
.tree-menu li {
  line-height: 2;
}
.tree-menu li span {
  cursor: default;
}
.icon {
  display: inline-block;
  width: 15px;
  height: 15px;
  background-repeat: no-repeat;
  vertical-align: -2px;
}

.tree-menu .tree-menu{
    margin-left: 20px;
}
</style>
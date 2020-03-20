<template>
<a-layout>
    <a-layout-sider class="sidebar" :trigger="null" collapsible v-model="collapsed" breakpoint="lg" collapsedWidth="80">
        <div class="logo" />
        <a-menu theme="dark" mode="inline" :defaultSelectedKeys="['1']">
            <a-menu-item key="1">
                <a-icon type="dashboard" />
                <span>Dashboard</span>
            </a-menu-item>
            <a-sub-menu key="2">
                <span slot="title">
                    <a-icon type="shop" /><span>Business Owners</span>
                </span>
                <a-menu-item key="5">Add New Business</a-menu-item>
                <a-menu-item key="6">View Businesses</a-menu-item>
            </a-sub-menu>
            <a-sub-menu key="3">
                <span slot="title">
                    <a-icon type="team" /><span>Users</span>
                </span>
                <a-menu-item key="7">Add New User</a-menu-item>
                <a-menu-item key="8">View Users</a-menu-item>
            </a-sub-menu>
        </a-menu>
    </a-layout-sider>
    <app-nav :collapse="collapsed" @changeCollapse="changeSidebarStatus"></app-nav>
</a-layout>
</template>

<script>
import appNav from './Navbar'
export default {
  components: {
    appNav
  },
  data () {
    return {
      collapsed: false
    }
  },
  methods: {
    changeSidebarStatus (payload) {
      this.collapsed = payload
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss";

.sidebar {
    &:before {
        content: " ";
        display: block;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        opacity: 0.4;
        background-image: linear-gradient(to right bottom,
                rgba($color-primary-light, 0.65),
                rgba($color-primary-dark, 0.65)),
            url("../../assets/img/sidebar-bg.jpg");
        background-size: cover;
        background-position: top;

    }

    .logo {
        height: 32px;
        background: rgba(255, 255, 255, 0.2);
        margin: 16px;
    }

    min-height: 100vh;

    .ant-menu-dark {
        background: inherit;

        .ant-menu-item-selected {
            background-color: $color-secondary-light;
        }

        .ant-menu-sub {
            background: rgba($color-primary-light, 1)
        }
    }
}
</style>

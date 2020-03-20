<template>
    <a-layout>
        <a-layout-header class="navbar">
            <a-icon class="trigger" :type="collapsed ? 'menu-unfold' : 'menu-fold'" @click="collapseSidebar()" />
            <span class="corps-name">Sample Dashboard</span>
            <a-dropdown class="dropdown-list" :trigger="['click']">
                <a class="ant-dropdown-link">
                    <a-avatar icon="user" size="small" />&nbsp;{{ $cookies.get('email').split('@')[0]}}
                </a>
                <a-menu slot="overlay" style="margin-right: 0px;">
                    <a-menu-item>
                        <a href="#">
                            <a-icon type="setting" />&nbsp;Settings
                        </a>
                    </a-menu-item>
                    <a-divider style="padding: 0; margin: 0" />
                    <a-menu-item>
                        <a style="cursor: pointer" @click="signOut">
                            <a-icon type="logout" />&nbsp;Logout
                        </a>
                    </a-menu-item>
                </a-menu>
            </a-dropdown>
        </a-layout-header>
        <!-- View -->
        <router-view></router-view>
    </a-layout>
</template>

<script>
import { logout } from '@/core/Auth/auth.services'
export default {
  props: ['collapse'],
  data () {
    return {
      collapsed: this.collapse
    }
  },
  methods: {
    collapseSidebar () {
      this.collapsed = !this.collapsed
      this.$emit('changeCollapse', this.collapsed)
    },
    signOut () {
      logout()
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss";

.navbar {
    background: #fff;
    padding: 0;
    box-shadow: 0 2px 5px rgba(0, 21, 41, 0.13);
    font-size: 18px;
    .corps-name, .dropdown-list {
        @include respond-below(md) {
            display: none;
        }
    }
    .trigger {
        font-size: 18px;
        line-height: 64px;
        padding: 0 24px;
        cursor: pointer;
        transition: color 0.3s;

        &:hover {
            color: #1890ff;
        }
    }

    .ant-dropdown-link {
        &.ant-dropdown-trigger {
            background-color: transparent;
            float: right;
            padding: 0 25px;
            font-size: 14px;
            color: #000;
            transition: background 0.3s ease-in-out;

            &:hover {
                background-color: rgba(170, 170, 170, 0.2);
            }

            @include respond-below(sm) {
                padding: 0 5px !important;
            }
        }
    }
}
</style>

<template>
<div>
    <div class="layout">
         <div class="sidebar" id="sidebar">
            <div>
               <aside class="menu">
                   <div class="menu-header bgk-primary" >
                       <div class="menu-header-title">Coral</div>
                   </div>
                        <p class="menu-label">
                            General
                        </p>
                        <div class="menu-list">
                            <li><router-link to="/"  class="switched"> <i class="material-icons">home</i>Dashboard</router-link></li>
                            <li><router-link to="/components"><i class="material-icons">apps</i>Components</router-link></li>
                        </div>
                        <p class="menu-label">
                            Administration
                        </p>
                        <div class="menu-list">
                            <li><router-link to="#"><i class="material-icons">settings</i>Team Settings</router-link></li>
                            <li>
                                <router-link to="#" class="expandible" data-expand="true"><i class="material-icons">settings_input_composite</i>Manage Your Team</router-link>
                                <div class="menu-list-collapse">
                                    <li><router-link to="#">Members</router-link></li>
                                    <li><router-link to="#">Plugins</router-link></li>
                                    <li><router-link to="#">Add a member</router-link></li>
                                </div>
                            </li>
                            <li><router-link to="#"><i class="material-icons">folder</i>Invitations</router-link></li>
                            <li><router-link to="#"><i class="material-icons">cloud</i>Cloud Storage Environment Settings</router-link></li>
                            <li><router-link to="#"><i class="material-icons">folder</i>Authentication</router-link></li>
                        </div>
                        <p class="menu-label">
                            Transactions
                        </p>
                        <div class="menu-list">
                            <li><router-link to="#">Payments</router-link></li>
                            <li><router-link to="#">Transfers</router-link></li>
                            <li><router-link to="#">Balance</router-link></li>
                        </div>
                    </aside>
            </div>
         </div>
        <div class="main">
          <div class="header ">
            <div class="brand">
              <a href="#" class="nav_btn" id="btn_toogle_sidebar" @click="toggle"> 
                 <i class="material-icons">menu</i>
              </a>
            </div>
            <div class="navbar">
                    <a href="#" class="nav_btn">
                        <i class="material-icons">apps</i>
                        <span class="bulle bgk-success">12</span>
                    </a>
                   
                    <div class="dropdown is-right">
                            <div class="dropdown-trigger">
                                 <a href="#" class="nav_btn"  aria-haspopup="true" aria-controls="dropdown-menu1">
                                    <i class="material-icons">notifications</i>
                                    <span class="count bgk-error">12</span>
                                </a>
                            </div>
                            <div class="dropdown-menu" id="dropdown-menu1" role="menu">
                                <div class="dropdown-content">
                                    <div class="dropdown-item">
                                        <p>You can insert <strong>any type of content</strong> within the dropdown menu.</p>
                                    </div>
                                    <hr class="dropdown-divider">
                                    <div class="dropdown-item">
                                        <p>You simply need to use a <code>&lt;div&gt;</code> instead.</p>
                                    </div>
                                    <hr class="dropdown-divider">
                                    <a href="#" class="dropdown-item">
                                        This is a link
                                    </a>
                                </div>
                            </div>
                     </div>
                       <div class="dropdown is-right">
                            <div class="dropdown-trigger">
                                 <a href="#" class="nav_btn"  aria-haspopup="true" aria-controls="dropdown-menu2">
                                    <i class="material-icons">person</i>
                                </a>
                            </div>
                            <div class="dropdown-menu" id="dropdown-menu2" role="menu">
                                <div class="dropdown-content">
                                    <a href="#" class="dropdown-item">
                                       My profile
                                    </a>
                                    <a class="dropdown-item">
                                        Settings
                                    </a>
                                   
                                    <hr class="dropdown-divider">
                                    <a href="#" class="dropdown-item">
                                        Log out
                                    </a>
                                </div>
                            </div>
                        </div>
                   
                </div>
          </div>
          <div class="content" id="content" @click="dismiss">
              <div class="canvas-fluid">
                   <router-view/>
              </div>
          </div>
        </div>      
    </div>
    <div class="overlay" id="overlay" @click="dismiss"></div>
</div>
</template>


<script>
window.$ = window.jQuery = require("jquery");

import "@/assets/coral/fonts/material/material-icons.css";
import "@/assets/coral/css/coral.css";
import "@/assets/css/app.css";
import "@/assets/coral/js/coral.js";

export default {
  data() {
    return {
      nav_open: false
    };
  },
  methods: {
    toggle() {
      var sidebar = document.getElementById("sidebar");
      var content = document.getElementById("content");
      var overlay = document.getElementById("overlay");
      sidebar.classList.add("active");
      content.classList.add("active");
      overlay.classList.add("active");
    },
    dismiss() {
      var sidebar = document.getElementById("sidebar");
      var overlay = document.getElementById("overlay");
      sidebar.classList.remove("active");
      overlay.classList.remove("active");
    }
  }
};
</script>




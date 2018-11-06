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
                            <li><router-link to="/"  class="is-active"> <i class="material-icons">home</i>Dashboard</router-link></li>
                            <li><router-link to="/components"><i class="material-icons">apps</i>Components</router-link></li>
                        </div>
                        <p class="menu-label">
                            Administration
                        </p>
                        <div class="menu-list">
                            <li><router-link to="#"><i class="material-icons">settings</i>Team Settings</router-link></li>
                            <li>
                                <router-link to="#" class="accordion"><i class="material-icons">settings_input_composite</i>Manage Your Team</router-link>
                                <ul class="accordion-content">
                                    <li><router-link to="#">Members</router-link></li>
                                    <li><router-link to="#">Plugins</router-link></li>
                                    <li><router-link to="#">Add a member</router-link></li>
                                </ul>
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
          <div class="navbar">
            <div class="brand">
              <a href="#" class="nav_btn" id="btn_toogle_sidebar" @click="toggle"> 
                 <i class="material-icons">menu</i>
              </a>
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




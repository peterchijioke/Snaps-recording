<template>
  <div class="app-header-wrapper">
    <!-- <AppLogo/> -->
    <div id="app-logo-wrapper">
      <div class="app-logo-icon">
        <div class="app-logo-icon-inner"></div>
      </div>
      <span class="app-logo-name">Adilo</span>
    </div>
    <!-- ===== Tab container==== -->
    <div class="nav-link-wrapper">
      <div class="nav-link">
        <router-link to="/" class="span-link" >Projects</router-link>
        <router-link to="/tools" class="span-link">Tools&App</router-link>
        <router-link to="/channels" class="span-link">Channel</router-link>
        <router-link to="/contact" class="span-link">Contact</router-link>
        <router-link to="/analytics" class="span-link">Analytics</router-link>
        <router-link to="/settings" class="span-link">Settings</router-link>
      </div>
      <div class="nav-profile">
        <span class="profile-help">Help</span>
        <div class="profile-user">
          <div class="avarta"></div>
          <div class="avarta"></div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import './AppHeader.less'

</script>
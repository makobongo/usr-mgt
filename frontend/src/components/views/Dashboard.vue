<template>
  <v-app>
    <!-- Left Sidebar (with primary color) -->
    <v-navigation-drawer app permanent color="primary">
      <v-list dense>
        <v-list-item link>
          <v-list-item-title class="white--text">Dashboard</v-list-item-title>
        </v-list-item>
        <v-list-item link>
          <v-list-item-title class="white--text">Profile</v-list-item-title>
        </v-list-item>
        <v-list-item link>
          <v-list-item-title class="white--text">Settings</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Main Content -->
    <v-main>
      <v-app-bar app dense color="primary" dark>
        <v-toolbar-title>Dashboard</v-toolbar-title>
        <v-spacer></v-spacer>

        <!-- User Profile Dropdown -->
        <v-menu bottom left>
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon v-bind="attrs" v-on="on">
              <v-avatar size="32">
                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User Profile" />
              </v-avatar>
            </v-btn>
          </template>
          <v-list>
            <v-list-item link @click="openProfileDialog">
              <v-list-item-title>My Profile</v-list-item-title>
            </v-list-item>
            <v-list-item link>
              <v-list-item-title>Settings</v-list-item-title>
            </v-list-item>
            <v-list-item link @click="logout">
              <v-list-item-title>Logout</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-app-bar>

      <!-- Dashboard Content -->
      <v-container fluid>
        <v-row>
          <!-- Total Users Card -->
          <v-col cols="12" md="4">
            <v-card>
              <v-card-title>Total Users</v-card-title>
              <v-card-subtitle class="display-2">{{ totalUsers }}</v-card-subtitle>
            </v-card>
          </v-col>

          <!-- Revenue Card -->
          <v-col cols="12" md="4">
            <v-card>
              <v-card-title>Revenue</v-card-title>
              <v-card-subtitle class="display-2">${{ revenue }}</v-card-subtitle>
            </v-card>
          </v-col>

          <!-- Orders Card -->
          <v-col cols="12" md="4">
            <v-card>
              <v-card-title>Orders</v-card-title>
              <v-card-subtitle class="display-2">{{ orders }}</v-card-subtitle>
            </v-card>
          </v-col>
        </v-row>

        <!-- Sales Overview Section -->
        <v-row>
          <v-col cols="12">
            <v-card>
              <v-card-title>Sales Overview</v-card-title>
              <!-- Optional Chart/Graph can go here -->
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <!-- Footer -->
    <v-footer app>
      <v-col class="text-center" cols="12">
        <span>&copy; 2025 Your Company</span>
      </v-col>
    </v-footer>

    <!-- Profile Settings Dialog (Popup) -->
    <v-dialog v-model="profileDialog" max-width="600px">
      <v-card>
        <v-card-title class="headline">Profile Settings</v-card-title>
        <v-card-text>
          <v-form>
            <v-text-field label="Name" v-model="userProfile.name" />
            <v-text-field label="Email" v-model="userProfile.email" />
            <v-text-field label="Phone" v-model="userProfile.phone" />
            <!-- Add more fields as needed -->
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-btn text @click="closeProfileDialog">Cancel</v-btn>
          <v-btn color="primary" @click="saveProfile">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script setup>
import { ref, onMounted } from 'vue';

// Sidebar visibility (always visible)
const sidebar = ref(true);

// User profile data
const totalUsers = ref(1245);
const revenue = ref(35000);
const orders = ref(1250);

// Profile dialog visibility
const profileDialog = ref(false);
const userProfile = ref({
  name: 'John Doe',
  email: 'johndoe@example.com',
  phone: '+1234567890',
});

// Method to open profile dialog
const openProfileDialog = () => {
  profileDialog.value = true;
};

// Method to close profile dialog
const closeProfileDialog = () => {
  profileDialog.value = false;
};

// Method to handle saving the profile data (you can add your API call here)
const saveProfile = () => {
  console.log('Profile Saved:', userProfile.value);
  closeProfileDialog(); // Close the dialog after saving
};

// Method to handle logout
const logout = () => {
  console.log("Logging out...");
  // Implement actual logout logic here (e.g., clear tokens, redirect to login page)
};

// Simulate an API call to fetch dashboard data
onMounted(() => {
  fetchDashboardData();
});

const fetchDashboardData = () => {
  // Simulate fetching data (replace with real API call or Vuex store actions)
  setTimeout(() => {
    totalUsers.value = 1300;   // Example of updating data
    revenue.value = 42000;     // Example of updating data
    orders.value = 1500;       // Example of updating data
  }, 1000);
};
</script>

<style scoped>
/* Optional custom styles */
</style>

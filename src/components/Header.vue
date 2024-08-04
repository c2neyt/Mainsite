<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const ws = ref(null);
const status = ref("text-gruvbox-gray");
const spotify = ref(null);
const discordStatus = ref("Çevrimdışı"); // Yeni: Discord durumu

const connectWebSocket = () => {
  ws.value = new WebSocket("wss://api.lanyard.rest/socket");
  ws.value.onopen = () => {
    console.log("WebSocket connection established.");
    ws.value.send(
      JSON.stringify({
        op: 2,
        d: { subscribe_to_id: "269625962423910400" },
      })
    );
  };

  ws.value.onmessage = (event) => {
    const data = JSON.parse(event.data);
    if (data.t === "INIT_STATE" || data.t === "PRESENCE_UPDATE") {
      const presence = data.d;
      spotify.value = presence.spotify;

      switch (presence.discord_status) {
        case "online":
          status.value = "text-gruvbox-green";
          discordStatus.value = "Çevrimiçi"; // Yeni: Discord durumu güncellemesi
          break;
        case "idle":
          status.value = "text-gruvbox-yellow";
          discordStatus.value = "Boşta"; // Yeni: Discord durumu güncellemesi
          break;
        case "dnd":
          status.value = "text-gruvbox-red";
          discordStatus.value = "Rahatsız Etmeyin"; // Yeni: Discord durumu güncellemesi
          break;
        case "offline":
          status.value = "text-gruvbox-gray";
          discordStatus.value = "Çevrimdışı"; // Yeni: Discord durumu güncellemesi
          break;
      }

      ws.value.onerror = (error) => {
        console.error("WebSocket error: ", error);
      };

      ws.value.onclose = () => {
        console.log("WebSocket connection closed.");
      };
    }
  };
};

onMounted(async () => {
  connectWebSocket();
});

onUnmounted(() => {
  if (ws.value) {
    ws.value.close();
  }
});
</script>

<template>
  <div class="font-sans font-black text-5xl">
    cuneyt<span :class="['text-2xl', status]">.pw</span>
  </div>
  <div>
    cuneyt (aka nikool), yaş 21. self-taught geliştirici,
    open-source meraklısıyım. programlama, oyun ve filmlere ilgiliyim.
  </div>
  <div class="flex gap-2 text-sm text-gruvbox-gray">
    <font-awesome-icon :icon="['fab', 'spotify']" class="mt-[3px]" />
    <div v-if="spotify">
      Şu anda dinlediğim
      <a
        :href="`https://open.spotify.com/track/${spotify.track_id}`"
        target="_blank"
        class="font-black underline"
        >{{ spotify.song }} - {{ spotify.artist }}</a
      >.
    </div>
    <div v-else>Şu anda hiçbir şey dinlemiyorum.</div>
  </div>
  <div class="flex gap-2 text-sm text-gruvbox-gray">
    <font-awesome-icon :icon="['fab', 'discord']" class="mt-[3px]" />
    <div>{{ discordStatus }}</div>
  </div>
  <div class="flex gap-10 mt-5 text-xl">
    <a href="https://github.com/c2neyt" target="_blank"
      ><font-awesome-icon :icon="['fab', 'github']"
    /></a>
    <a href="https://steamcommunity.com/id/pehlivan16" target="_blank"
      ><font-awesome-icon :icon="['fab', 'steam']"
    /></a>
    <a href="https://discord.com/users/269625962423910400" target="_blank"
      ><font-awesome-icon :icon="['fab', 'discord']"
    /></a>
    <a href="https://psnprofiles.com/c2neyt" target="_blank" rel="me"
      ><font-awesome-icon :icon="['fab', 'playstation']"
    /></a>
  </div>
</template>

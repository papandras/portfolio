<template>
   <div>
     <h1>contact</h1>
   </div>
</template>

<script>
export default {
  mounted() {
    document.getElementById("menu-item-contact").classList.add("active-menu-item")
    document.getElementById("menu-item-home").classList.remove("active-menu-item")
  }
}
</script>
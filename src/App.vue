<script setup lang="ts">
import { computed, ref } from 'vue'

const stickerFiles = [
  '哎！.png',
  '白眼.png',
  '怠机.png',
  '点赞.png',
  '尴尬.png',
  '哈哈哈.png',
  '哼.png',
  '可怜.png',
  '摸摸头.png',
  '思考.png',
  '献花.png',
  '疑惑.png',
  '招财猫.png',
  'ok.png',
  'wink.png',
]

const showAbout = ref(false)

const stickers = computed(() =>
  stickerFiles.map((name) => ({
    name,
    src: `/stickers/${name}`
  }))
)
</script>

<template>
  <n-config-provider>
    <div class="page">
      <header class="top-bar">
        <h1 class="title">猫猫 CRS 表情包</h1>
        <n-button quaternary size="medium" @click="showAbout = true">关于</n-button>
      </header>

      <main class="content">
        <div class="grid">
          <div class="card" v-for="item in stickers" :key="item.name">
            <div class="thumb">
              <n-image
                :src="item.src"
                :alt="item.name"
                object-fit="contain"
                lazy
              />
            </div>
            <div class="caption">{{ item.name }}</div>
          </div>
        </div>
      </main>

      <n-modal
        v-model:show="showAbout"
        preset="dialog"
        title="关于猫猫 CRS 表情包"
        positive-text="关闭"
        @positive-click="showAbout = false"
      >
        <p>
          米画师@铃屋13s 制作
        </p>
        <p>
          本网站的前端代码（不包括图像）采用 <a href="https://github.com/CrSjimo/stickers.sjimo.dev/blob/main/LICENSE" target="_blank" rel="noopener noreferrer">MIT 许可协议</a>进行许可。
        </p>
        <p>
          本网站所展示的图像采用 <a href="https://creativecommons.org/publicdomain/zero/1.0/" target="_blank" rel="noopener noreferrer">CC0 1.0 许可协议</a>。
        </p>
      </n-modal>
    </div>
  </n-config-provider>
</template>

<style scoped>
.page {
  min-height: 100vh;
  padding: 24px;
  max-width: 1280px;
  margin: 0 auto;
  background: radial-gradient(circle at 20% 20%, #f8fbff 0, #fff 50%),
    radial-gradient(circle at 80% 0, #f3f7ff 0, #fff 45%);
}

.top-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 20px;
}

.title {
  margin: 0;
  font-size: 28px;
  font-weight: 800;
  letter-spacing: 0.4px;
}

.content {
  padding: 12px 0 28px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 12px;
  align-items: start;
}

.card {
  background: #ffffff;
  border-radius: 14px;
  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.07);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  border: 1px solid #eef2f7;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.card:hover {
  transform: translateY(-3px);
  box-shadow: 0 16px 40px rgba(15, 23, 42, 0.12);
}

.thumb {
  width: 160px;
  height: 160px;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  margin: 0 auto;
}

.caption {
  padding: 10px 12px;
  font-size: 14px;
  color: #475467;
  text-align: center;
  background: linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%);
  border-top: 1px solid #e2e8f0;
}

:deep(.thumb .n-image) {
  width: 100%;
  height: 100%;
}

@media (max-width: 767px) {
  .page {
    padding: 16px;
  }

  .title {
    font-size: 22px;
  }
}
</style>

import type { SiteConfig } from './src/types/config';

/**
 * 🔧 站点唯一配置文件
 * 所有页面内容、SEO、模块开关、统计代码等均在此处配置
 * 模板代码不写死任何内容，一切通过本文件控制
 */
export const siteConfig: SiteConfig = {
  site: {
    name: '拼豆图纸100张',
    url: 'https://pindoutuzhi100.com',
    locale: 'zh-CN',
    language: 'zh',
    logo: '/logo.png',
  },

  seo: {
    title: '拼豆图纸100张 - 免费整理100-500张的各种风格的拼豆图纸',
    description:
      '拼豆图纸100张专注整理100-500张免费拼豆图纸素材，涵盖各种可爱风格，支持按标签浏览和免费下载，为拼豆爱好者提供优质图纸资源。',
    ogImage: '/og-image.png',
  },

  nav: [
    { label: '首页', href: '/' },
    { label: '关于', href: '/about' },
  ],

  list: {
    title: '拼豆图纸100张',
    description: '精选100-500张免费拼豆图纸，涵盖多种可爱风格，支持标签分类浏览',
    postsPerPage: 12,
    defaultAuthor: '拼豆图纸100张',
  },

  about: {
    title: '关于',
    description: '了解拼豆图纸100张的创办初衷与内容规划',
    content:
      '拼豆图纸100张致力于为拼豆爱好者整理和分享100-500张优质拼豆图纸资源，涵盖多种可爱风格，帮助用户在制作前快速预览、收藏和下载参考图。',
    sections: [
      {
        title: '项目定位',
        text: '我们专注于整理100-500张免费拼豆图纸资源，不提供在线绘制工具，专注于图纸内容的展示与分享。',
      },
      {
        title: '内容特色',
        text: '图纸按标签分类整理，支持分页浏览与详情查看，涵盖多种风格和主题，满足不同制作需求。',
      },
      {
        title: '使用方式',
        text: '建议在详情页查看大图预览后，下载原图进行打印或对照制作，所有图纸均可免费下载使用。',
      },
    ],
  },

  schema: {
    type: 'WebPage',
    applicationCategory: 'Reference',
    operatingSystem: 'All',
    offers: {
      price: '0',
      priceCurrency: 'CNY',
    },
  },

  analytics: {
    baidu: '',
    google: '',
    adsense: '',
  },

  sitemap: {
    changefreq: 'weekly',
    priority: 1.0,
  },

  robots: {
    rules: [
      {
        userAgent: '*',
        disallow: ['/api/', '/admin/'],
      },
    ],
  },

  footer: {
    copyright: `© ${new Date().getFullYear()} 拼豆图纸100张`,
    icp: '',
    columns: [
      {
        links: [
          { label: '关于', url: '/about' },
          { label: '隐私', url: '/privacy' },
          { label: '条款', url: '/terms' },
        ],
      },
    ],
  },
};

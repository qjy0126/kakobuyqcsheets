window.KF = window.KF || {};

KF.site = {
  name: "Kakobuy Spreadsheet 2026",
  domain: "kakobuygoodqc.com",
  updated: "Sep 11, 2026",
  sheetUrl: "https://docs.google.com/spreadsheets/d/1ouCVXknU6RYgA1bhcB0g3cPV3yr0a210C4q7IWd1DOc/edit?gid=1593055287#gid=1593055287",
};

KF.nav = {
  apparel: [
    { slug: "shoes", label: "Shoes" },
    { slug: "t-shirts", label: "T-Shirts" },
    { slug: "hoodies", label: "Hoodies / Sweaters" },
    { slug: "jackets", label: "Jackets" },
    { slug: "pants", label: "Pants/Shorts" },
    { slug: "sets", label: "Sets" },
    { slug: "jersey", label: "Jersey" },
    { slug: "underwear", label: "Underpants" },
  ],
  lifestyle: [
    { slug: "headwear", label: "Headwear" },
    { slug: "glasses", label: "Glasses" },
    { slug: "watches", label: "Watches" },
    { slug: "perfume", label: "Perfume" },
    { slug: "accessories", label: "Accessories" },
    { slug: "bricks", label: "Building Blocks" },
    { slug: "other", label: "Other Stuff" },
  ],
};

KF.categories = [
  { slug: "shoes", label: "Shoes", image: "img/products/7652933295.jpg" },
  { slug: "t-shirts", label: "T-Shirts", image: "img/products/7758836739.jpg" },
  { slug: "hoodies", label: "Hoodies", image: "img/products/7769976357.jpg" },
  { slug: "jackets", label: "Jackets", image: "img/products/7761891898.jpg" },
  { slug: "pants", label: "Pants/Shorts", image: "img/products/7761875477.jpg" },
  { slug: "headwear", label: "Headwear", image: "img/products/7769887549.jpg" },
  { slug: "sets", label: "Sets", image: "img/products/7758909715.jpg" },
  { slug: "underwear", label: "Underpants", image: "img/products/7761903780.jpg" },
  { slug: "jersey", label: "Jersey", image: "img/products/7772857134.jpg" },
  { slug: "accessories", label: "Accessories", image: "img/products/7773007666.jpg" },
  { slug: "other", label: "Other Stuff", image: "img/products/7779924357.jpg" },
];
KF.allProductImage = "img/products/7652933295.jpg";

KF.collections = ["Court", "Fleece", "Denim", "Outdoor", "Matchday", "Desk", "Travel", "Workwear", "Eyewear", "Timepiece"];

const img = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=80`;

KF.products = [
  { id: "kf-101", title: "Volt Runner Low", price: 46.8, rating: 4.7, category: "shoes", collection: "Court", qc: true, featured: true, source: "Weidian", sourceUrl: "https://weidian.com/item.html?itemID=7483107541", image: img("photo-1542291026-7eec264c27ff"), gallery: [img("photo-1542291026-7eec264c27ff"), img("photo-1460353581641-37baddab0fa2")], sizes: ["40","41","42","43","44"], summary: "Cushioned court runner. Check toe bumper glue on warehouse QC." },
  { id: "kf-102", title: "Chalk Court 85", price: 51.2, rating: 4.5, category: "shoes", collection: "Court", qc: true, featured: true, source: "Taobao", sourceUrl: "https://item.taobao.com/item.htm?id=7380011222", image: img("photo-1460353581641-37baddab0fa2"), gallery: [img("photo-1460353581641-37baddab0fa2")], sizes: ["39","40","41","42","43"], summary: "Retro court leather. Size up a half if you sit between sizes." },
  { id: "kf-103", title: "Night Trail Mesh", price: 39.9, rating: 4.4, category: "shoes", collection: "Outdoor", qc: true, featured: false, source: "1688", sourceUrl: "https://detail.1688.com/offer/7200112233.html", image: img("photo-1600185365483-26d7a4cc7519"), gallery: [img("photo-1600185365483-26d7a4cc7519")], sizes: ["40","41","42","43"], summary: "Breathable mesh trainer. Confirm tongue stitching on QC." },
  { id: "kf-125", title: "Court Classic Low", price: 38.46, rating: 3.5, category: "shoes", collection: "Court", qc: true, featured: false, source: "Weidian", sourceUrl: "https://weidian.com/item.html?itemID=7483107542", image: img("photo-1549298916-b41d501d3772"), gallery: [img("photo-1549298916-b41d501d3772")], sizes: ["40","41","42","43","44"], summary: "Low court sneaker. Check panel alignment on QC." },
  { id: "kf-126", title: "Studio Leather Mid", price: 28.85, rating: 4.5, category: "shoes", collection: "Court", qc: true, featured: false, source: "Taobao", sourceUrl: "https://item.taobao.com/item.htm?id=7380011223", image: img("photo-1595950653106-6c9ebd614d3a"), gallery: [img("photo-1595950653106-6c9ebd614d3a")], sizes: ["39","40","41","42","43"], summary: "Mid-cut leather court shoe." },
  { id: "kf-127", title: "Runner Mesh 4", price: 55.38, rating: 4.5, category: "shoes", collection: "Outdoor", qc: true, featured: false, source: "Weidian", sourceUrl: "https://weidian.com/item.html?itemID=7483107543", image: img("photo-1606107557195-0e29a4b5b4aa"), gallery: [img("photo-1606107557195-0e29a4b5b4aa")], sizes: ["40","41","42","43","44"], summary: "Daily runner with a mesh upper." },
  { id: "kf-128", title: "Track Sprint", price: 39.56, rating: 4.4, category: "shoes", collection: "Outdoor", qc: true, featured: false, source: "1688", sourceUrl: "https://detail.1688.com/offer/7200112234.html", image: img("photo-1608231387042-66d1773070a5"), gallery: [img("photo-1608231387042-66d1773070a5")], sizes: ["40","41","42","43"], summary: "Lightweight sprint trainer." },
  { id: "kf-129", title: "Star Court Cream", price: 50.82, rating: 4.2, category: "shoes", collection: "Court", qc: true, featured: false, source: "Taobao", sourceUrl: "https://item.taobao.com/item.htm?id=7380011224", image: img("photo-1560769629-975ec94e6a86"), gallery: [img("photo-1560769629-975ec94e6a86")], sizes: ["39","40","41","42","43","44"], summary: "Cream court pair. Check sole yellowing on QC." },
  { id: "kf-130", title: "Vintage Court Mix", price: 60.66, rating: 4.6, category: "shoes", collection: "Court", qc: true, featured: false, source: "Weidian", sourceUrl: "https://weidian.com/item.html?itemID=7483107544", image: img("photo-1551107696-a4b0c5a0d9a2"), gallery: [img("photo-1551107696-a4b0c5a0d9a2")], sizes: ["40","41","42","43"], summary: "Mixed-panel vintage court shoe." },
  { id: "kf-131", title: "Mono Court White", price: 12.86, rating: 4.0, category: "shoes", collection: "Court", qc: false, featured: false, source: "Taobao", sourceUrl: "https://item.taobao.com/item.htm?id=7380011225", image: img("photo-1525966222134-fcfa99b8ae77"), gallery: [img("photo-1525966222134-fcfa99b8ae77")], sizes: ["39","40","41","42","43","44"], summary: "Simple white canvas court." },
  { id: "kf-132", title: "Boost Foam Slide", price: 7.78, rating: 4.3, category: "shoes", collection: "Travel", qc: false, featured: false, source: "1688", sourceUrl: "https://detail.1688.com/offer/7200112235.html", image: img("photo-1603484984985-42056d0e2d1d"), gallery: [img("photo-1603484984985-42056d0e2d1d")], sizes: ["40","41","42","43","44"], summary: "Foam slide. True to size for most." },
  { id: "kf-133", title: "Stripe Court Grey", price: 24.73, rating: 4.1, category: "shoes", collection: "Court", qc: true, featured: false, source: "Weidian", sourceUrl: "https://weidian.com/item.html?itemID=7483107545", image: img("photo-1514989940723-e8e51635b782"), gallery: [img("photo-1514989940723-e8e51635b782")], sizes: ["40","41","42","43"], summary: "Grey court sneaker with a side stripe." },
  { id: "kf-134", title: "Ink Graphic Tee", price: 12.4, rating: 4.6, category: "t-shirts", collection: "Workwear", qc: true, featured: true, source: "Weidian", sourceUrl: "https://weidian.com/item.html?itemID=7360033751", image: img("photo-1521572163474-6864f9cf17ab"), gallery: [img("photo-1521572163474-6864f9cf17ab")], sizes: ["S","M","L","XL"], summary: "Heavyweight cotton with a cracked print. Wash inside-out." },
  { id: "kf-105", title: "Boxy Blank White", price: 9.8, rating: 4.3, category: "t-shirts", collection: "Workwear", qc: false, featured: false, source: "Taobao", sourceUrl: "https://item.taobao.com/item.htm?id=6511008899", image: img("photo-1583743814966-8936f5b7be1a"), gallery: [img("photo-1583743814966-8936f5b7be1a")], sizes: ["S","M","L","XL"], summary: "Oversized blank with dropped shoulders." },
  { id: "kf-106", title: "Forest Fleece Hoodie", price: 28.5, rating: 4.8, category: "hoodies", collection: "Fleece", qc: true, featured: true, source: "Weidian", sourceUrl: "https://weidian.com/item.html?itemID=7412200988", image: img("photo-1556821840-3a63f95609a7"), gallery: [img("photo-1556821840-3a63f95609a7")], sizes: ["M","L","XL","XXL"], summary: "300gsm fleece. Ask QC for drawcord and inner label." },
  { id: "kf-107", title: "Zip Core Charcoal", price: 32.1, rating: 4.5, category: "hoodies", collection: "Fleece", qc: true, featured: false, source: "Taobao", sourceUrl: "https://item.taobao.com/item.htm?id=7002213344", image: img("photo-1509942774463-acf339cf87d5"), gallery: [img("photo-1509942774463-acf339cf87d5")], sizes: ["S","M","L","XL"], summary: "Full-zip hoodie. Request a zipper-pull close-up." },
  { id: "kf-108", title: "Harbor Bomber", price: 54.6, rating: 4.4, category: "jackets", collection: "Outdoor", qc: true, featured: true, source: "1688", sourceUrl: "https://detail.1688.com/offer/8100223344.html", image: img("photo-1551028719-00167b16eac5"), gallery: [img("photo-1551028719-00167b16eac5")], sizes: ["M","L","XL"], summary: "Satin bomber with rib cuffs. Confirm lining color." },
  { id: "kf-109", title: "Packable Shell", price: 36.0, rating: 4.2, category: "jackets", collection: "Travel", qc: false, featured: false, source: "Weidian", sourceUrl: "https://weidian.com/item.html?itemID=7221003344", image: img("photo-1591047139829-d91aecb6caea"), gallery: [img("photo-1591047139829-d91aecb6caea")], sizes: ["S","M","L","XL"], summary: "Lightweight wind shell that packs into its pocket." },
  { id: "kf-110", title: "Baggy Indigo Jean", price: 29.9, rating: 4.7, category: "jeans", collection: "Denim", qc: true, featured: true, source: "Weidian", sourceUrl: "https://weidian.com/item.html?itemID=7550011990", image: img("photo-1542272604-787c3835535d"), gallery: [img("photo-1542272604-787c3835535d")], sizes: ["28","30","32","34","36"], summary: "Relaxed straight denim. Measure inseam on QC." },
  { id: "kf-111", title: "Work Carpenter Denim", price: 33.4, rating: 4.6, category: "jeans", collection: "Workwear", qc: true, featured: false, source: "Taobao", sourceUrl: "https://item.taobao.com/item.htm?id=8123300911", image: img("photo-1475173277031-31ed51024e8e"), gallery: [img("photo-1475173277031-31ed51024e8e")], sizes: ["30","32","34","36"], summary: "Carpenter jean with a side pocket." },
  { id: "kf-112", title: "Cargo Olive Pant", price: 24.7, rating: 4.5, category: "pants", collection: "Outdoor", qc: true, featured: false, source: "1688", sourceUrl: "https://detail.1688.com/offer/6900112233.html", image: img("photo-1473966968600-fa801b869a1a"), gallery: [img("photo-1473966968600-fa801b869a1a")], sizes: ["S","M","L","XL"], summary: "Tapered cargo with an adjustable hem." },
  { id: "kf-113", title: "Court Short Navy", price: 16.2, rating: 4.3, category: "pants", collection: "Court", qc: false, featured: false, source: "Weidian", sourceUrl: "https://weidian.com/item.html?itemID=7001988344", image: img("photo-1591195853828-11db59a44d6b"), gallery: [img("photo-1591195853828-11db59a44d6b")], sizes: ["S","M","L","XL"], summary: "Mesh-lined court short. True to size for most." },
  { id: "kf-114", title: "City Track Set", price: 41.5, rating: 4.6, category: "sets", collection: "Fleece", qc: true, featured: true, source: "Taobao", sourceUrl: "https://item.taobao.com/item.htm?id=7332210099", image: img("photo-1552902865-b72c031ac5ea"), gallery: [img("photo-1552902865-b72c031ac5ea")], sizes: ["M","L","XL"], summary: "Two-piece jersey set. Pick the same variant for top and bottom." },
  { id: "kf-115", title: "Home Kit 24", price: 22.8, rating: 4.4, category: "jersey", collection: "Matchday", qc: true, featured: true, source: "Weidian", sourceUrl: "https://weidian.com/item.html?itemID=7661200455", image: img("photo-1579952363873-27f3bade9f55"), gallery: [img("photo-1579952363873-27f3bade9f55")], sizes: ["S","M","L","XL"], summary: "Breathable match shirt. Name/number is a listing option." },
  { id: "kf-116", title: "Retro Away 88", price: 26.4, rating: 4.8, category: "jersey", collection: "Matchday", qc: true, featured: false, source: "Taobao", sourceUrl: "https://item.taobao.com/item.htm?id=6883302211", image: img("photo-1431324155629-1a6deb1dec8d"), gallery: [img("photo-1431324155629-1a6deb1dec8d")], sizes: ["M","L","XL"], summary: "Throwback away kit. Check print alignment on QC." },
  { id: "kf-117", title: "Daily Trunk 3-Pack", price: 11.9, rating: 4.5, category: "underwear", collection: "Travel", qc: false, featured: false, source: "1688", sourceUrl: "https://detail.1688.com/offer/6112233445.html", image: img("photo-1489987707025-afc232f7ea0f"), gallery: [img("photo-1489987707025-afc232f7ea0f")], sizes: ["M","L","XL"], summary: "Cotton stretch trunks as a three-pack." },
  { id: "kf-118", title: "Low Profile Cap", price: 10.5, rating: 4.6, category: "headwear", collection: "Travel", qc: true, featured: false, source: "Weidian", sourceUrl: "https://weidian.com/item.html?itemID=7019988221", image: img("photo-1588850561407-ed78c282e89b"), gallery: [img("photo-1588850561407-ed78c282e89b")], sizes: ["Adjustable"], summary: "Unstructured six-panel. Ask for an embroidery close-up." },
  { id: "kf-119", title: "Acetate Frame Sun", price: 18.6, rating: 4.3, category: "glasses", collection: "Eyewear", qc: true, featured: false, source: "Weidian", sourceUrl: "https://weidian.com/item.html?itemID=7880011223", image: img("photo-1511497584788-876760111969"), gallery: [img("photo-1511497584788-876760111969")], sizes: ["Standard"], summary: "UV400 acetate. Request a photo of the hinge screws." },
  { id: "kf-120", title: "Field Watch 40", price: 47.0, rating: 4.7, category: "watches", collection: "Timepiece", qc: true, featured: true, source: "Taobao", sourceUrl: "https://item.taobao.com/item.htm?id=7445566778", image: img("photo-1523275335684-37898b6baf30"), gallery: [img("photo-1523275335684-37898b6baf30")], sizes: ["40mm"], summary: "40mm quartz field watch. QC the dial print." },
  { id: "kf-121", title: "Cedar EDT 50ml", price: 21.3, rating: 4.2, category: "perfume", collection: "Travel", qc: false, featured: false, source: "1688", sourceUrl: "https://detail.1688.com/offer/7556677889.html", image: img("photo-1541643600914-78b084683601"), gallery: [img("photo-1541643600914-78b084683601")], sizes: ["50ml"], summary: "Woody citrus EDT. Skip the lot if shrink wrap is torn." },
  { id: "kf-122", title: "Cross Sling Bag", price: 19.4, rating: 4.5, category: "accessories", collection: "Travel", qc: true, featured: false, source: "Weidian", sourceUrl: "https://weidian.com/item.html?itemID=7123009988", image: img("photo-1590874103328-eac38a941956"), gallery: [img("photo-1590874103328-eac38a941956")], sizes: ["One size"], summary: "Water-resistant sling. Check strap hardware on QC." },
  { id: "kf-123", title: "GT Supercar Bricks", price: 58.9, rating: 4.8, category: "bricks", collection: "Desk", qc: true, featured: true, source: "1688", sourceUrl: "https://detail.1688.com/offer/8332211000.html", image: img("photo-1587654780291-39c9404d746b"), gallery: [img("photo-1587654780291-39c9404d746b")], sizes: ["1:8 kit"], summary: "Display brick set. Count bags before you submit the parcel." },
  { id: "kf-124", title: "Studio Cups Over-ear", price: 27.5, rating: 4.1, category: "other", collection: "Desk", qc: true, featured: false, source: "Weidian", sourceUrl: "https://weidian.com/item.html?itemID=7990011444", image: img("photo-1505740420928-5e560c06d30e"), gallery: [img("photo-1505740420928-5e560c06d30e")], sizes: ["One size"], summary: "Over-ear cups. Note pairing status in warehouse comments." },
];

KF.authors = {
  kakospreadsheet: {
    slug: "kakospreadsheet",
    name: "kakospreadsheet",
    byline: "Editor of Kakobuy Spreadsheet on kakobuygoodqc.com",
    bio: "Short notes on browsing this catalog instead of a frozen sheet — QC photos, filters, and how to open a find on Kakobuy.",
  },
};

KF.posts = [
  { slug: "catalog-not-cells", author: "kakospreadsheet", title: "A catalog beats a 15k-row sheet on your phone", date: "2026-09-08", excerpt: "Spreadsheets stall. Cards with photos, QC flags, and live links do not.", body: ["Google Sheets is fine as a dump. It is a weak storefront, especially on mobile.", "KakoBuy Spreadsheet on kakobuygoodqc.com keeps the same kind of row — title, price, source, QC — as something you can actually browse.", "Keep a sheet as backup if you want. Shop here."] },
  { slug: "read-qc", author: "kakospreadsheet", title: "How to read warehouse QC before you ship", date: "2026-09-08", excerpt: "QC is a chance to catch glue and sizing issues while the item is still in the warehouse.", body: ["Ask for logos, stitching, and size tags. Wide shots hide the defects that cause returns.", "Compare warehouse photos to the seller listing, not to a campaign image.", "Message the agent before the parcel is sealed."] },
  { slug: "first-order", author: "kakospreadsheet", title: "First Kakobuy order: paste, pay, QC, ship", date: "2026-09-03", excerpt: "This site is a directory. Checkout always happens on Kakobuy.", body: ["Open a find on this catalog, then continue on Kakobuy.", "Pay the agent. The seller ships to the warehouse, not your door.", "Review QC, then submit a parcel. Quotes depend on weight and line."] },
  { slug: "filters", author: "kakospreadsheet", title: "Filters that actually surface better finds", date: "2026-09-03", excerpt: "Category, then QC, then price. Messy titles waste brand searches.", body: ["QC-tagged rows are easier to inspect later, not automatically better.", "Sort by latest when you want live links.", "Re-open the source URL before you order — prices move."] },
];

KF.faqs = [
  { q: "What is this site?", a: "An independent Kakobuy Spreadsheet: a visual index of Taobao, Weidian, and 1688 finds with QC notes. We do not take payment or ship parcels." },
  { q: "How does Kakobuy fit in?", a: "Kakobuy is the agent — purchase, warehouse, QC, consolidation, and international shipping. kakobuygoodqc.com only helps you find and open listings." },
  { q: "Are QC photos available?", a: "Rows marked QC include reference photos. Warehouse QC from Kakobuy appears after the item arrives at the warehouse." },
  { q: "How much is shipping?", a: "It depends on weight, volume, destination, and line. Use Kakobuy’s estimator after items are in the warehouse." },
  { q: "How long does delivery take?", a: "Many parcels land in 7–20 days after dispatch. Customs and holidays can stretch that." },
  { q: "What if I am unhappy with an item?", a: "Contact Kakobuy support with the order ID and QC photos, ideally while the item is still in the warehouse." },
];

KF.productCats = (p) => {
  const cats = [p.category].concat(p.categories || []).filter(Boolean);
  const seen = {};
  return cats.filter((c) => (seen[c] ? false : (seen[c] = true)));
};
KF.inCategory = (p, slug) => KF.productCats(p).includes(slug);
KF.applyExtraCategories = () => {
  const skip = /sock|suitcase|luggage/i;
  const extraSet = /tracksuit|track\s*suit|sportsuit|\bsuit\b/i;
  KF.products.forEach((p) => {
    const title = String(p.title || "");
    if (p.category === "sets" || skip.test(title) || !extraSet.test(title)) return;
    const extra = p.categories || [];
    if (!extra.includes("sets")) extra.push("sets");
    p.categories = extra;
  });
};

KF.money = (n) => `$${n.toFixed(2)}`;
KF.invite = {
  kakobuy: "vaxp6",
  oopbuy: "R28A1X6T7",
  mulebuy: "201207480",
  acbuy: "XQFW6M",
  hipobuy: "Y0WGBFNCB",
};
KF.listing = (sourceUrl) => {
  const url = String(sourceUrl || "");
  const weidian = url.match(/itemID=(\d+)/i);
  if (weidian || /weidian\.com/i.test(url)) {
    const id = weidian ? weidian[1] : "";
    const raw = id ? `https://weidian.com/item.html?itemID=${id}` : url;
    return { id, channel: "weidian", platform: "WEIDIAN", source: "WD", path: "weidian", url: raw };
  }
  const tb = url.match(/[?&]id=(\d+)/i);
  if (/taobao\.com|tmall\.com/i.test(url)) {
    return { id: tb ? tb[1] : "", channel: "taobao", platform: "TAOBAO", source: "TB", path: "taobao", url };
  }
  const ali = url.match(/offer\/(\d+)/i);
  if (/1688\.com/i.test(url)) {
    return { id: ali ? ali[1] : "", channel: "1688", platform: "1688", source: "AL", path: "1688", url };
  }
  return { id: "", channel: "weidian", platform: "WEIDIAN", source: "WD", path: "weidian", url };
};
KF.agentUrl = (agentId, sourceUrl) => {
  const L = KF.listing(sourceUrl);
  const enc = encodeURIComponent(L.url);
  if (agentId === "kakobuy") {
    return `https://www.kakobuy.com/item/details?url=${enc}&affcode=${KF.invite.kakobuy}`;
  }
  if (agentId === "oopbuy") {
    return `https://oopbuy.com/goods/details?channel=${L.channel}&id=${L.id}&inviteCode=${KF.invite.oopbuy}`;
  }
  if (agentId === "mulebuy") {
    return `https://mulebuy.com/product?id=${L.id}&platform=${L.platform}&ref=${KF.invite.mulebuy}`;
  }
  if (agentId === "acbuy") {
    return `https://www.acbuy.com/product?url=${encodeURIComponent(enc)}&id=${L.id}&source=${L.source}&code=${KF.invite.acbuy}`;
  }
  if (agentId === "hipobuy") {
    return `https://hipobuy.com/product/${L.path}/${L.id}?source=SEARCH_LIST&keyword=${enc}&inviteCode=${KF.invite.hipobuy}`;
  }
  return L.url;
};
KF.agents = [
  { id: "kakobuy", name: "Kakobuy", logo: "img/buy/kakobuy.png" },
  { id: "oopbuy", name: "oopBuy", logo: "img/buy/oopbuy.png" },
  { id: "mulebuy", name: "MuleBuy", logo: "img/buy/mulebuy.png" },
  { id: "acbuy", name: "Acbuy", logo: "img/buy/acbuy.png" },
  { id: "hipobuy", name: "HipoBuy", logo: "img/buy/hipobuy.png" },
];
KF.kakobuyUrl = (sourceUrl) => KF.agentUrl("kakobuy", sourceUrl);
KF.extractUrl = (text) => {
  const m = String(text).match(/https?:\/\/[^\s"'<>]+/i);
  return m ? m[0].replace(/[.,;]+$/, "") : "";
};
KF.supported = (url) =>
  /taobao\.com|tmall\.com|weidian\.com|1688\.com/i.test(url);

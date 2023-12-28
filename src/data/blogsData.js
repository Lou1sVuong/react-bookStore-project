const blogsDatas = [
    {
        image: "https://i.ibb.co/b11KT8q/blog-1.jpg",
        title: "Beautiful Book Pages",
        excerpt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, odio.",
        content : "Beautiful book pages are more than just sheets of paper; they are gateways to an expansive universe where imagination knows no bounds. Within these pages, limitations dissolve, and stories find their unique voices, weaving tales that transcend time and space. Each turn of a page unfurls a new realm, inviting vibrant characters to pirouette through the corridors of the mind, while every carefully chosen word resonates with the deepest of emotions, creating symphonies of feeling. Books are not mere sources of inspiration; they are reservoirs of boundless energy, sparking a fire within the soul and nurturing an insatiable hunger for knowledge. They serve as guides through uncharted territories, awakening curiosity and fostering a relentless quest for understanding. Each book, with its eloquent prose and vivid imagery, becomes a companion on the journey of self-discovery, illuminating new paths and broadening horizons with each immersive chapter."
    },
    {
        image: "https://i.ibb.co/dt44fHb/blog-2.jpg",
        title: "Bookworm's Delight",
        excerpt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, odio.",
        content: "The joy of a bookworm isn't just about delving into pages; it's an endless expedition through knowledge and imagination. It's an adventure without limits in the realm of words and ideas. Each book acts as a new doorway unveiling fresh facets of life, from tiny gestures to profound philosophies, from personal anecdotes to vast panoramas of the world. Reading transcends the boundaries of our reality, sparking curiosity and nurturing the mind."
    },
    {
        image: "https://i.ibb.co/85Qp31J/blog-3.jpg",
        title: "The Literary Lane",
        excerpt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, odio.",
        content: "The literary lane isn't just a repository of outstanding works; it's a profound journey into humanity and society. It's a map of emotions, knowledge, and the intricate interweaving of life. Each book is a testament to the human experience, offering insights into diverse cultures, thoughts, and perspectives. Exploring this lane is not just about reading; it's about connecting deeply with the essence of existence."
    },
    {
        image: "https://i.ibb.co/w00SyZ8/blog-4.jpg",
        title: "Pages of Imagination",
        excerpt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, odio.",
        content: "Pages of imagination aren't just about ink on paper; they're gateways to alternate universes, where dreams and realities merge seamlessly. Each page is a canvas for the mind to paint vibrant landscapes, weave intricate plots, and give life to characters. Books aren't static objects; they're vessels carrying the essence of creativity, inviting readers to embark on exhilarating journeys through the power of imagination."
    },
    {
        image: "https://i.ibb.co/p4D98r4/blog-5.jpg",
        title: "Soulful Reads",
        excerpt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, odio.",
        content: "Soulful reads aren't just about consuming words; they're about experiencing emotions that resonate within. Each book is a companion, guiding readers through a labyrinth of feelings, stirring empathy and understanding. They transcend mere storytelling; they become conduits for self-reflection, offering solace, inspiration, and moments of profound connection with the human experience."
    },
    {
        image: "https://i.ibb.co/THY8qYx/blog-8.jpg",
        title: "Life and Books",
        excerpt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, odio.",
        content: "Life and books share an intertwined narrative, each influencing and enriching the other. Books encapsulate the essence of life's myriad experiences, offering perspectives, wisdom, and solace. They serve as companions on life's journey, providing insight, comfort, and sometimes even a roadmap through the complexities of existence. Engaging with books isn't just a pastime; it's a profound dialogue with the essence of being."
    },
];
function generateIdFromTitle(title) {
    return title.replace(/\s+/g, ''); // Remove spaces from the title
}
blogsDatas.forEach(blog => {
    blog.id = generateIdFromTitle(blog.title);
});
export {
    blogsDatas,
  };
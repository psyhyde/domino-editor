---
id: doc4
title: Block Style Editor (EN)
sidebar_label: Block Style Editor (EN)
---

# Block Style Editor (EN)

---

A Playbook for Block Style Editor (**BSE**): Text Styling, Block Components, Misc Functions & Theme Switcher 

**Tags:** 

`Block Style Editor`;`Block Structure Editor`; `New-Gen Editor`; `WYSIWYG Markdown Editor`; `Modular Visual Components`; `Structured Content`; `Web-based Text Editor`; `Rich Content Editor`; `CMS`; 

---

## About Block-Style Editor

### Definition

- **Background of Block-Style Editor：**
  
  - Markdown, for its high readability and simple syntax, has been adopted widely; Pure Markdown editing is [WYSIWYM](https://en.wikipedia.org/wiki/WYSIWYM)
  - Most Web-based RTF editors follow [WYSIWYG](https://en.wikipedia.org/wiki/WYSIWYG) interaction pattern
  - Block Style Editors provide a Markdown-like but WYSIWYG editing experience
  - On UX and interaction level, BSE provides a similar experience to [Typora](https://typora.io/), [MarkText](https://marktext.app/), but with integrated Mini-App Blocks

- **Features of Block-Style Editor：**
  
  - Follow a structure of **[ Markdown (Template) + CSS + Fonts ]**
  - Inherent the **text styling rules** of Markdown, keep its simplicity and content-focusing approach; Remove features like: line spacing, font size, font color
  - Expand text editing into **Text Editing & Styling** and **Mini-App Customization**
  - Mini-App Blocks: table, image container, advanced code block, prefabricated UI view, embeds.  
  - **A web-based Content Editor** that, take **Interactive Document** and **Modular UI** as guideline, use **Block / Paragraph** as content unit, use **Markdown** as its Template Structure. 
  
  

> Block-Style Editor has its roots in CMS(content management system), SSG (static site generator), GitHub& Markdown, and Low-code Site Building. 
>
> In a sense, a Block Style Editor is a Modular CMS for web document use case.
>
> MDX, JSX



### Block Type Classification

<img src="assets/Block_Classification.png" alt="Block_Classification" style="zoom: 40%;" />

### UI Structure of Block-Style Editor



---

## Text Block & Text Styling

A **Text Block** is the most used and most common block in a **BSE**. Its styling rules largely inherent from common **WYSIWYG Markdown Editors**. 

**Inline** and **Block** are actually HTML concepts for **inline elements** and **block elements** [^[W3School]^](https://www.w3schools.com/html/html_blocks.asp).  Here, we take the concept to UX/UI level, emphasizing on their visual and interaction properties.   

### Inline Text Style

#### 1. Bold

#### 2. Italic

#### 3. Underline

#### 4. Strikethrough

#### 5. Highlight

#### 6. Inline Code

#### 7. Tag / Keyword

#### 8. Superscript & Subscript

#### 9. Text Alignment

Not a Markdown supported style, but indeed a feature needed by many.

---

### Legacy Inline Text Style

Below are legacy **Office Styling Features** that I am trying to Kill 🗡🩸, with a **Universal Theme Switcher**.

In a modern web editing environment, these attributes are not supposed to be seem by users. 

#### x.1. Font Color

#### x.2. Font Background Color

#### x.3. Font Family

#### x.4. Font Size

#### x.5. Letter-Spacing & Word Spacing

![wordCharacterspacing](assets/wordCharacterspacing.png)

Word Spacing is not supported in CJK font

#### x.6. Line Height & Paragraph Spacing

**Paragraph Spacing** is actually a design term, appearing in InDesign, Sketch, MS Word, etc.

In CSS,  `margin-bottom` is used to add spacing in-between paragraphs. There are many alternative ways to achieve this, depending on the dev-framework you use. 

![paragraphspacing](assets/paragraphspacing.png)

#### x.7. Indent

#### x.8. Content Width / Line Width

#### x.9. Inline Image

[More at](####4.-Inline Icon ⭐️)

#### x.10. Text-Image Wrapping

Another **Legacy Style** appears in Office product, graphic publications, and newspaper.  

<img src="assets/textImageWrap.png" alt="textImageWrap"  />

---

### Inline Function

- Inline Function makes certain portion of the text **Intractable** ;

- Interactive Objects are attached on certain part of **Text**, instead of the whole **Text Block**;

- Ideally, the **UI height** does not exceed **line height**. 

#### 1. Hyperlink

Simple outbound link to external pages. 

#### 2. InDoc Link / Internal Link

[Internal Link](#### InDoc Link / Internal Link)

Direct to another paragraph of the current document

#### 3. Mention @

#### 4. Inline Icon ⭐️

- Able to upload and use customer **Image-based Icon** (not font icon)
- Give user option to turn an inline image into a inline Icon which has equal height as line height; or turn an inline image into image block

[Joypixels](https://www.joypixels.com/)

#### 5. Terminology & Reference Popover Card ⭐️

**Wikipedia** reference popover card:

**Interaction Rules:** 

- Popover when mouse over highlighted field
- Retract if mouse move away
- Stay and become intractable if mouse move over

![wikipediaPopover](assets/wikipediaPopover.png)

---

### Paragraph Block

#### 1. Headings

- A Heading has its unique font and font size according to a set of theme; 
- Headings do not support some text styles, such as Bold, Highlight
- Collapsible Heading 

#### 2. Numbered List

Also known as **Ordered List**

#### 3. Bulleted List

Also known as **Unordered List**

#### 4. To-Do List

Also known as **Task List** or **Check List**

#### 5. Collapsible List

#### 6. Basic Table

#### 7. Block Quote

#### 8. Pull Quote / Hint

**Pull quote** uses a bigger font size than traditional **block quote**; usually used to create a visual impact and a another way to highlight Text block. 

#### 9. Basic Code Block

Simple Text Code Block: **Background Color**, **Mono Font**, **Syntax Highlighting**

```yaml
receipt:     Oz-Ware Purchase Invoice
date:        2012-08-06
customer:
    first_name:   Dorothy
    family_name:  Gale
```

#### 10. Block Math

$$
E=mc^2
$$

#### 11. Comment ⭐️

A commenting feature that can target multiple blocks and partial text from single text block.

<img src="assets/commentLineBlock.png" alt="commentLineBlock"  />

#### 12. Text Block Background ⭐️

---

## Mini-App Block & Variation 

### Image Block

Most used **Block Type**, has most variations. It always has been a pain to balance image and text, in term of how they eventually appear on the document. 

#### 1. Basic Image

- Drag&Drop Upload to a specific Block/Paragraph
- Resize 
  - Quip offers a simple **Grid & Snap feature** for resizing images ⭐️
- Alignment: Left, Right, Center
- Border and Shadow
- Caption (title for the image)

<img src="assets/CKEditorImage.png" alt="CKEditorImage"  />

**CKEditor** - basic image function: Caption and Resize

#### 2. Container

Instead of treating **Images** as **Inline Objects**, a Container System provides **Table - Image Object** structure

The idea of **Image Container** can be expanded to a **Visual Content Container** or **Content Table**. Further discussion at [Prefab Block](###-Prefab-Block)

<img src="assets/QuipImageContainer.png" alt="QuipImageContainer" style="zoom:75%;" />

**Quip** image container with ==Grid and Auto-Snap feature==



<img src="assets/DropboxImageContainer.png" alt="DropboxImageContainer" style="zoom: 80%;" />

**Dropbox Paper**, auto grid - image gallery



#### 3. Carousel

- A derivative of Container

- Suitable for CMS and Blog-ware, not exactly for tech document

#### 4. Gallery

A derivative of Container

<img src="assets/NotionImageGallery.png" alt="NotionImageGallery"  />

**Notion** - Image Gallery

#### 5. Tab Image Switcher ⭐️

A derivative of **Container**, see Gitbook Tab Container

#### 6. Commenting in Image

Comment dot in **Quip**'s image block

![QuipImageCommenting](assets/QuipImageCommenting.png)

### Prefab Block

Prefabricated block is the core of **Interactive Document** paradigm. This is whole another universe. Two iconic products are [Coda.io](https://coda.io/) and [Notion](https://www.notion.so/).

> Coda has a bit of learning curve, even for tech-based users. Thus, I don't think it will have a large user base in the short term. Nonetheless, Coda is still a great product for its framework design and micro-interaction design. 

Below are some common types of **Use Case Driven** prefab blocks, that can be used in regular document systems.

#### 1. Content Table (Content Container)⭐️



![CodaContentTable](assets/CodaContentTable.png)

Coda Content Table

#### 2. Advanced To-Do List

#### 3. Vote

#### 4. Calendar

#### 5. Meeting Note

#### 6. Rating Table

#### 7. Kanban

#### 8. Countdown

![quipCountdown](assets/quipCountdown.png)

**Quip** countdown Card

### Embed Block

#### 1. Advanced Spreadsheet

Microsoft Excel comparable spreadsheet and data-visualization product 

#### 2. MindMap

#### 3. Hyperlink Preview Card

A widely used feature in CMS, Blogs and other web pages. Not a suitable style for tech related document.

<img src="assets/codaURLpreviewCard.png" alt="codaURLpreviewCard" style="zoom: 50%;" />

This is bad example by Coda. Coda treats a URL preview card as an **inline object**. Text can be applied to the same paragraph (block). To me, this leads to confusion and bad experience to users. 

A large Image, Card or other large visual object should be treat as a **paragraph (block) object**. 



#### 4. File Download Link

![Gitbookfiledownloadblock](assets/Gitbookfiledownloadblock.png)

*Gitbook UI for file downloading link*

![confluenceDownloadlinkcard](assets/confluenceDownloadlinkcard.png)

*Confluence UI for file downloading link*



#### 5. 3rd Party API 

The process of deciding what API and external service to integrate is highly **Use Case Driven**.

List of common 3rd party API embeds:

1. Embeds from Image, Music, Video hosting service
2. Commenting, Rating, Stats service
3. Code Snippet Demo service: CodePen, JSFiddle
4. Graphic Design & UI Design hosting service 
5. Weather info, Location info, etc

---

### Miscellaneous Functions

#### 1. Advanced Code Block

Code block from [Microsoft Docs](https://docs.microsoft.com/en-us/windows/uwp/design/basics/xaml-basics-adaptive-layout) - High Contrast Theme

<img src="assets/MS_Docs.png" alt="MS_Docs"  />

[Docsify](https://docsify.js.org/#/) Auto-Compile Multi-Tab 

<img src="assets/Docsify_Tabs.png" alt="Docsify_Tabs"  />

[Gitbook](https://app.gitbook.com/) Code Block with Multi-Tab

<img src="assets/gitbookCodeBox.png" alt="gitbookCodeBox"  />

#### 2. Collapsible Heading / Block

<img src="assets/collapibleBlock.png" alt="collapibleBlock"  />

Coda collapsible heading (Block) feature

#### 3. Ordering Blocks by Drag&Drop

A common function adoptable by some BSE products. Users can change a block's **position** and **hierarchy** by drag & drop. 

<img src="assets/drag_n_drop_block_gitbook.gif" title="" alt="drag_n_drop_block_gitbook" data-align="center">

*Gitbook drag & drop block feature*



#### 4. Comment

A commenting feature that can point to multiple blocks and partial text from single text block.

**Coda** - comment function

<img src="assets/commentLineBlock.png" alt="commentLineBlock"  />



#### 5. Structured List to MindMap ⭐️

K-Tree structure stored in XML, Markdown, HTML, or other XML-like languages, should be able to populate simple MindMaps. Such feature will allow user to create Mindmap in the simplest way possible. 

My illustration of **Structured List to Mindmap** function

<img src="assets/populateMindmap.png" alt="populateMindmap"  />

#### 6. TOC to MindMap



https://markmap.js.org/repl/

<img src="assets/markmapJS.png" alt="markmapJS"  />



https://atom.io/packages/markdown-mindmap

<img src="assets/atomMindmap.png" alt="atomMindmap" style="zoom:50%;" />

<img src="assets/atomMindmapgif.gif" alt="atomMindmapgif" style="zoom: 67%;" />



An actual use case for **TOC-to-MindMap** feature

<img src="assets/useCaseofArticleMindmap.png" alt="useCaseofArticleMindmap" style="zoom:50%;" />

*Monitor on the left shows the TOC mindmap of this document*



#### 7. Document Repo to MindMap (Knowledge Map)

Map out the entire document repository, by **Document Hierarchy**, **TOC**, **Terminology Card**, **Links**, etc.

This feature is used in **Research Focused** note taking and knowledge management tools, such as [Obsidian](https://obsidian.md/), [Roam Research](https://roamresearch.com/), [幕布](https://mubu.com/)



![imageplaceholder](assets/imageplaceholder.png)

---

### Out of Canvas UIs



#### 1. Floating TOC

#### 2. File Tree

#### 3. Comment Section (Community Feedback)

- **"Like - Follow - Watch"** stats
- Number of Comments
- Text highlighting by user
- ......

#### 4. Authors & Contribution

#### 5. Cover Image

#### 6. Article Stats

- Word & Character Count
- Version Control & Editing History
- Suggested Reading Time
- Block Usage & Page Composition

---

## Global Theme Switcher

A complete theme would consists of **CSS file** , **font file** and **Icons**.

A more feasible list would be:

1. Font family: Sans, Serif, Mono
2. Font Color, Font Background Color, Canvas Color, Canvas Texture
3. Line Space (line height), Indent, Character Width
4. Canvas Width: Default (fixed at 720 - 780px), Auto, Max



---

## Further Reading



### 1. Open Source Framework

1. [Quill](https://quilljs.com/)

2. [Editor.js](https://editorjs.io/)

3. [Wiki.js](https://wiki.js.org/)

4. [Block-styles | Froala](https://froala.com/wysiwyg-editor/v1-2/docs/examples/block-styles/)

5. [Draft.js | Facebook](https://draftjs.org/docs/advanced-topics-block-styling)    

6. [Sanity](https://www.sanity.io/)



### 2. Off-the-shelf Products

1. [Froala](https://froala.com/docs/) 👍
2. [CKEditor](https://ckeditor.com/) 👍
3. [StackEdit](https://github.com/benweet/stackedit)
4. [TinyMCE](https://www.tiny.cloud/)
5. [Block Editor | WordPress ](https://developer.wordpress.org/block-editor/)



### 3. Standalone WYSIWYG Markdown Editors

1. Typora
2. [MarkText](http://pad.haroopress.com/user.html)  `real-time inline preview`
3. Obsidian 
4. [Mochi](https://mochi.cards/?ref=producthunt)  `Nested Term Cards`
5. Zettlr
6. [Haroopad](http://pad.haroopress.com/user.html)



### 4. SaaS Document Collaboration Products

|                                        |                | **File Repo** | **Publish  &Search Engine** | **==Block Style  Editor==** | **Block Mini Apps** | **Table** | **Slides** | **Theme Style Switcher** | **Team Collab** | **Version Ctrl.** | **Overall Rating (1-10)** |
| -------------------------------------- | :------------: | :-----------: | :-------------------------: | :-------------------------: | :-----------------: | :-------: | :--------: | :----------------------: | :-------------: | :---------------: | :-----------------------: |
| ![quip](assets/quip.png)               |    **Quip**    |       ✔️       |                             |             ✔️✔️              |         ✔️✔️          |    ✔️✔️     |     ✔️✔️     |            ✔️             |       ✔️✔️        |         ✔️         |          **9.5**          |
| ![coda](assets/coda.png)               |    **Coda**    |       ✔️       |              ✔              |             ✔️✔️              |         ✔️✔️          |     ✔     |            |            ✔️             |        ✔️        |         ✔️         |           **9**           |
| ![confluence](assets/confluence.png)   | **Confluence** |       ✔️       |                             |              ✔️              |         ✔️✔️          |     ✔️     |            |            ✔️             |       ✔️✔️        |        ✔️✔️         |           **9**           |
| ![notion](assets/notion.png)           |   **Notion**   |       ✔️       |                             |             ✔️✔️              |         ✔️✔️          |           |            |            ✔️             |        ✔️        |         ✔️         |          **8.5**          |
| ![gitbook](assets/gitbook.png)         |  **GitBook**   |       ✔️       |                             |             ✔️✔️              |          ✔️          |           |            |            ✔️             |       ✔️✔️        |        ✔️✔️         |           **8**           |
| ![yuque](assets/yuque.png)             |   **YuQue**    |      ✔️✔️       |              ✔️              |              ✔              |         ✔️✔️          |     ✔️     |     ✔️      |            ✔             |       ✔️✔️        |        ✔️✔️         |           **8**           |
| ![feishu_lark](assets/feishu_lark.png) |  **飞书Lark**  |      ✔️✔️       |                             |             ✔️✔️              |          ✔️          |    ✔️✔️     |            |                          |        ✔️        |         ✔️         |           **8**           |
| ![dropbox](assets/dropbox.png)         |  **Dropbox**   |      ✔️✔️✔️      |                             |              ✔️              |          ✔️          |     ✔️     |            |                          |        ✔️        |         ✔️         |           **7**           |
| ![nimbus](assets/nimbus.png)           |   **Nimbus**   |       ✔️       |                             |              ✔️              |          ✔️          |           |            |            ✔️             |                 |         ✔️         |           **6**           |
| ![slite](assets/slite.png)             |   **Slite**    |               |                             |              ✔️              |          ✔️          |           |            |                          |        ✔️        |         ✔️         |           **5**           |



### 5. Articles

1. https://getpublii.com/docs/the-block-editor.html
2. 


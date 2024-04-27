# Jason404 - Chatbot

This is a Chatbot web app that uses the Ollama API to chat with a locally deployed LLM model.

<div style="display: flex; flex-direction: row; flex-wrap: wrap; gap: 0.5rem;">
  <img src="img/page_demo_1.png" alt="Chatbot" width="400rem">
  <img src="img/page_demo_2.png" alt="Chatbot Dark" width="400rem">
</div>

## Features and Todos

- Chat features
  - [x] Chat with locally deployed Ollama-backend LLM.
  - [x] Continuous conversation.
  - [x] Choose model from local tags.
  - [ ] Chat history. (Database & LocalStorage)
  - [ ] Text file uploading and model fine-tuning.
- App features
  - [ ] Dark mode.
  - [ ] Responsive design.
  - [ ] User authentication.
  - [ ] User settings.
  - [ ] Multi-user support.
- Deployment
  - [x] Run on Node server.
  - [ ] Dockerize the app.

## Dev Details

### Environment Variables

Environment variables are stored in `.env.$(NODE_ENV)` files. By default, the app runs in `development` mode.

Files ending with `.local` are git-ignored and should be used for storing sensitive information. For example, API keys, contact information, etc. 

### Development

Run development server: `npm run dev`. 

### Deployment

This app is supposed to run by Node server.

- Build: `npm run build`.
- Start: `npm run start`.

### Tech Stack

- **Front-end**
  - [Next.js](https://nextjs.org/) is the main framework.
  - [Material-UI](https://mui.com/material-ui/getting-started/) simplifies the UI design.
  - [Axios](https://axios-http.com/) provides some handy ways to handle HTTP requests.
  - [react-markdown](https://github.com/remarkjs/react-markdown?tab=readme-ov-file) for parsing and rendering markdown content.
- **Back-end**
  - [Ollama](https://ollama.com) provides the APIs for accessing the LLM model.
  - [ProgreSQL](https://www.postgresql.org/) is used for storing chat history. (Planned)

### Design Guidelines

#### Styles

Common styles are applied using [Tailwind CSS](https://tailwindcss.com/). 

**Color Palette**

<div style="display: flex; margin-bottom: 8px; gap: 4px; justify-content: flex-start; align-items: start;">
  <div style="">
    <p style="font-family: monospace; font-weight: bold; line-height: 0%;">Neutral</p>
  </div>

  <div
    style="width: fit-content; display: flex; flex-wrap: wrap; gap: 8px; font-family: monospace; text-align: left; border: 0px solid #000;">
    <div
      style="width: fit-content; height: fit-content; ">
      <div style="background-color: #fafafa; height: 40px; border-radius: 4px;"></div>
      <p style="margin: 2; line-height: 14px">50</p>
      <p style="margin: 2; line-height: 14px">#fafafa</p>
    </div>
    <div
      style="width: fit-content; height: fit-content; ">
      <div style="background-color: #f5f5f5; height: 40px; border-radius: 4px;"></div>
      <p style="margin: 2; line-height: 14px">100</p>
      <p style="margin: 2; line-height: 14px">#f5f5f5</p>
    </div>
    <div
      style="width: fit-content; height: fit-content; ">
      <div style="background-color: #e5e5e5; height: 40px; border-radius: 4px;"></div>
      <p style="margin: 2; line-height: 14px">200</p>
      <p style="margin: 2; line-height: 14px">#e5e5e5</p>
    </div>
    <div
      style="width: fit-content; height: fit-content; ">
      <div style="background-color: #d4d4d4; height: 40px; border-radius: 4px;"></div>
      <p style="margin: 2; line-height: 14px">300</p>
      <p style="margin: 2; line-height: 14px">#d4d4d4</p>
    </div>
    <div
      style="width: fit-content; height: fit-content; ">
      <div style="background-color: #a3a3a3; height: 40px; border-radius: 4px;"></div>
      <p style="margin: 2; line-height: 14px">400</p>
      <p style="margin: 2; line-height: 14px">#a3a3a3</p>
    </div>
    <div
      style="width: fit-content; height: fit-content; ">
      <div style="background-color: #737373; height: 40px; border-radius: 4px;"></div>
      <p style="margin: 2; line-height: 14px">500</p>
      <p style="margin: 2; line-height: 14px">#737373</p>
    </div>
    <div
      style="width: fit-content; height: fit-content; ">
      <div style="background-color: #525252; height: 40px; border-radius: 4px;"></div>
      <p style="margin: 2; line-height: 14px;">600</p>
      <p style="margin: 2; line-height: 14px;">#525252</p>
    </div>
    <div
      style="width: fit-content; height: fit-content; ">
      <div style="background-color: #404040; height: 40px; border-radius: 4px;"></div>
      <p style="margin: 2; line-height: 14px;">700</p>
      <p style="margin: 2; line-height: 14px;">#404040</p>
    </div>
    <div
      style="width: fit-content; height: fit-content; ">
      <div style="background-color: #262626; height: 40px; border-radius: 4px;"></div>
      <p style="margin: 2; line-height: 14px;">800</p>
      <p style="margin: 2; line-height: 14px;">#262626</p>
    </div>
    <div
      style="width: fit-content; height: fit-content; ">
      <div style="background-color: #171717; height: 40px; border-radius: 4px;"></div>
      <p style="margin: 2; line-height: 14px;">900</p>
      <p style="margin: 2; line-height: 14px;">#171717</p>
    </div>
    <div
      style="width: fit-content; height: fit-content; ">
      <div style="background-color: #0a0a0a; height: 40px; border-radius: 4px;"></div>
      <p style="margin: 2; line-height: 14px;">950</p>
      <p style="margin: 2; line-height: 14px;">#0a0a0a</p>
    </div>
  </div>
</div>

Color consistences of `Material-UI` components with `TailwindCSS` are applied via the `MuiThemeWrapper` at `components/muiThemeWrapper.js`.

**Icons**

This project utilizes [Material-Icons](https://mui.com/components/material-icons/) to provide a consistent icon set.

## License

This project is licensed under the Apache License 2.0 - see the [LICENSE](LICENSE) file for details.

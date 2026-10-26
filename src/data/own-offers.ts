export type OwnOfferTier = 'primary' | 'secondary';
export interface OwnOfferConfig {
  id: string;
  name: string;
  eyebrow: string;
  headline: string;
  body: string;
  cta: string;
  url: string;
}
export const SITE_DOMAIN = 'subaudit.org';
export const SITE_NAME = 'SubAudit';
export const OWN_OFFERS: Record<OwnOfferTier, OwnOfferConfig> = {
  primary: {
    id: 'oneaipass',
    name: 'OneAIPass',
    eyebrow: 'From our team',
    headline: 'Paying a monthly AI subscription you barely use?',
    body: 'OneAIPass gives you ChatGPT-, Claude- and Gemini-class models in one place. Prepaid credit, pay per message, no monthly plan. Free starter credit at signup.',
    cta: 'Start chatting free',
    url: 'https://oneaipass.com/chat.html',
  },
  secondary: {
    id: 'cheaperllm',
    name: 'CheaperLLM',
    eyebrow: 'From our team',
    headline: 'Building with AI APIs?',
    body: 'One OpenAI-compatible key for hundreds of models. Prepaid, pay per token, no subscription.',
    cta: 'Get a free API key',
    url: 'https://cheaperllm.com/account.html',
  },
};

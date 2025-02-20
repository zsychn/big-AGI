/**
 * This is here because the API does not provide a list of available upstream models, and does not provide
 * descriptions for the models.
 * (nor does it reliably provide context window sizes - upstream bug: https://github.com/ollama/ollama/issues/1473)
 *
 <<<
 Can you modify the following data structure, according to the updated information from the attached
 web page(https://ollama.ai/library?sort=featured). Be very thorough, do not skip any lines, both in
 the provided file and in the web page. Add/remove to reflect the order in the web page, update
 the *description* and *pulls*, and preserve the existing *added* field on existing entries, or set
 it to 20250219 on brand new entries. Note: the default contextWindow in code is 8192, so we do not redefine that.
 >>>
 */
export const OLLAMA_BASE_MODELS: { [key: string]: { description: string, pulls: number, contextWindow?: number, hasTools?: true, hasVision?: true, isEmbeddings?: true, tags?: string[], added?: string } } = {
  'deepseek-r1': { description: 'DeepSeek\'s first-generation of reasoning models with comparable performance to OpenAI-o1, including six dense models distilled from DeepSeek-R1 based on Llama and Qwen.', pulls: 18500000, tags: ['1.5b', '7b', '8b', '14b', '32b', '70b', '671b'], added: '20250128' },
  'llama3.3': { description: 'New state of the art 70B model. Llama 3.3 70B offers similar performance compared to the Llama 3.1 405B model.', pulls: 1300000, tags: ['70b'], hasTools: true, added: '20241210' },
  'phi4': { description: 'Phi-4 is a 14B parameter, state-of-the-art open model from Microsoft.', pulls: 621400, tags: ['14b'], added: '20250128' },
  'llama3.2': { description: 'Meta\'s Llama 3.2 goes small with 1B and 3B models. ', pulls: 9100000, tags: ['1b', '3b'], hasTools: true, added: '20241210' },
  'llama3.1': { description: 'Llama 3.1 is a new state-of-the-art model from Meta available in 8B, 70B and 405B parameter sizes.', pulls: 24200000, tags: ['8b', '70b', '405b'], hasTools: true, added: '20241210' },
  'nomic-embed-text': { description: 'A high-performing open embedding model with a large token context window.', pulls: 16500000, tags: [], isEmbeddings: true, added: '20240501' },
  'mistral': { description: 'The 7B model released by Mistral AI, updated to version 0.3.', pulls: 9100000, tags: ['7b'], hasTools: true },
  'llama3': { description: 'Meta Llama 3: The most capable openly available LLM to date', pulls: 7500000, tags: ['8b', '70b'], added: '20240501' },
  'qwen': { description: 'Qwen 1.5 is a series of large language models by Alibaba Cloud spanning from 0.5B to 110B parameters', pulls: 4400000, tags: ['0.5b', '1.8b', '4b', '7b', '14b', '32b', '72b', '110b'] },
  'gemma': { description: 'Gemma is a family of lightweight, state-of-the-art open models built by Google DeepMind. Updated to version 1.1', pulls: 4300000, tags: ['2b', '7b'], added: '20240501' },
  'qwen2.5': { description: 'Qwen2.5 models are pretrained on Alibaba\'s latest large-scale dataset, encompassing up to 18 trillion tokens. The model supports up to 128K tokens and has multilingual support. ', pulls: 4300000, tags: ['0.5b', '1.5b', '3b', '7b', '14b', '32b', '72b'], hasTools: true, added: '20241210' },
  'qwen2': { description: 'Qwen2 is a new series of large language models from Alibaba group', pulls: 4100000, tags: ['0.5b', '1.5b', '7b', '72b'], hasTools: true, added: '20240628' },
  'llava': { description: '🌋 LLaVA is a novel end-to-end trained large multimodal model that combines a vision encoder and Vicuna for general-purpose visual and language understanding. Updated to version 1.6.', pulls: 3300000, tags: ['7b', '13b', '34b'], hasVision: true },
  'llama2': { description: 'Llama 2 is a collection of foundation language models ranging from 7B to 70B parameters.', pulls: 3000000, tags: ['7b', '13b', '70b'] },
  'phi3': { description: 'Phi-3 is a family of lightweight 3B (Mini) and 14B (Medium) state-of-the-art open models by Microsoft.', pulls: 2900000, tags: ['3.8b', '14b'], added: '20240501' },
  'gemma2': { description: 'Google Gemma 2 is a high-performing and efficient model available in three sizes: 2B, 9B, and 27B.', pulls: 2800000, tags: ['2b', '9b', '27b'], added: '20240628' },
  'qwen2.5-coder': { description: 'The latest series of Code-Specific Qwen models, with significant improvements in code generation, code reasoning, and code fixing.', pulls: 2300000, tags: ['0.5b', '1.5b', '3b', '7b', '14b', '32b'], hasTools: true, added: '20241210' },
  'codellama': { description: 'A large language model that can use text prompts to generate and discuss code.', pulls: 1800000, tags: ['7b', '13b', '34b', '70b'] },
  'mxbai-embed-large': { description: 'State-of-the-art large embedding model from mixedbread.ai', pulls: 1500000, tags: ['335m'], isEmbeddings: true, added: '20240501' },
  'tinyllama': { description: 'The TinyLlama project is an open endeavor to train a compact 1.1B Llama model on 3 trillion tokens.', pulls: 1300000, tags: ['1.1b'] },
  'llama3.2-vision': { description: 'Llama 3.2 Vision is a collection of instruction-tuned image reasoning generative models in 11B and 90B sizes.', pulls: 1300000, tags: ['11b', '90b'], hasVision: true, added: '20241210' },
  'mistral-nemo': { description: 'A state-of-the-art 12B model with 128k context length, built by Mistral AI in collaboration with NVIDIA.', pulls: 1200000, tags: ['12b'], hasTools: true, added: '20241210' },
  'starcoder2': { description: 'StarCoder2 is the next generation of transparently trained open code LLMs that comes in three sizes: 3B, 7B and 15B parameters. ', pulls: 886000, tags: ['3b', '7b', '15b'], added: '20240501' },
  'snowflake-arctic-embed': { description: 'A suite of text embedding models by Snowflake, optimized for performance.', pulls: 691500, tags: ['22m', '33m', '110m', '137m', '335m'], isEmbeddings: true, added: '20240501' },
  'deepseek-coder-v2': { description: 'An open-source Mixture-of-Experts code language model that achieves performance comparable to GPT4-Turbo in code-specific tasks.', pulls: 663900, tags: ['16b', '236b'], added: '20240628' },
  'deepseek-v3': { description: 'A strong Mixture-of-Experts (MoE) language model with 671B total parameters with 37B activated for each token.', pulls: 607300, tags: ['671b'], added: '20250128' },
  'deepseek-coder': { description: 'DeepSeek Coder is a capable coding model trained on two trillion code and natural language tokens.', pulls: 561500, tags: ['1.3b', '6.7b', '33b'] },
  'mixtral': { description: 'A set of Mixture of Experts (MoE) model with open weights by Mistral AI in 8x7b and 8x22b parameter sizes.', pulls: 561200, tags: ['8x7b', '8x22b'], hasTools: true },
  'llama2-uncensored': { description: 'Uncensored Llama 2 model by George Sung and Jarrad Hope.', pulls: 542300, tags: ['7b', '70b'] },
  'dolphin-mixtral': { description: 'Uncensored, 8x7b and 8x22b fine-tuned models based on the Mixtral mixture of experts models that excels at coding tasks. Created by Eric Hartford.', pulls: 511200, tags: ['8x7b', '8x22b'] },
  'openthinker': { description: 'A fully open-source family of reasoning models built using a dataset derived by distilling DeepSeek-R1.', pulls: 494100, tags: ['7b', '32b'], added: '20250219' },
  'codegemma': { description: 'CodeGemma is a collection of powerful, lightweight models that can perform a variety of coding tasks like fill-in-the-middle code completion, code generation, natural language understanding, mathematical reasoning, and instruction following.', pulls: 489500, tags: ['2b', '7b'], added: '20240501' },
  'phi': { description: 'Phi-2: a 2.7B language model by Microsoft Research that demonstrates outstanding reasoning and language understanding capabilities.', pulls: 489300, tags: ['2.7b'] },
  'bge-m3': { description: 'BGE-M3 is a new model from BAAI distinguished for its versatility in Multi-Functionality, Multi-Linguality, and Multi-Granularity.', pulls: 419600, tags: ['567m'], isEmbeddings: true, added: '20241210' },
  'wizardlm2': { description: 'State of the art large language model from Microsoft AI with improved performance on complex chat, multilingual, reasoning and agent use cases.', pulls: 353700, tags: ['7b', '8x22b'], added: '20240501' },
  'dolphin-mistral': { description: 'The uncensored Dolphin model based on Mistral that excels at coding tasks. Updated to version 2.8.', pulls: 319300, tags: ['7b'] },
  'llava-llama3': { description: 'A LLaVA model fine-tuned from Llama 3 Instruct with better scores in several benchmarks.', pulls: 317700, tags: ['8b'], hasVision: true, added: '20240628' },
  'all-minilm': { description: 'Embedding models on very large sentence level datasets.', pulls: 293800, tags: ['22m', '33m'], isEmbeddings: true, added: '20240501' },
  'minicpm-v': { description: 'A series of multimodal LLMs (MLLMs) designed for vision-language understanding.', pulls: 287700, tags: ['8b'], hasVision: true, added: '20241210' },
  'dolphin-llama3': { description: 'Dolphin 2.9 is a new model with 8B and 70B sizes by Eric Hartford based on Llama 3 that has a variety of instruction, conversational, and coding skills.', pulls: 283800, tags: ['8b', '70b'], added: '20240501' },
  'command-r': { description: 'Command R is a Large Language Model optimized for conversational interaction and long context tasks.', pulls: 279900, tags: ['35b'], hasTools: true, added: '20240501' },
  'orca-mini': { description: 'A general-purpose model ranging from 3 billion parameters to 70 billion, suitable for entry-level hardware.', pulls: 273700, tags: ['3b', '7b', '13b', '70b'] },
  'yi': { description: 'Yi 1.5 is a high-performing, bilingual language model.', pulls: 264300, tags: ['6b', '9b', '34b'] },
  'hermes3': { description: 'Hermes 3 is the latest version of the flagship Hermes series of LLMs by Nous Research', pulls: 258400, tags: ['3b', '8b', '70b', '405b'], hasTools: true, added: '20241210' },
  'phi3.5': { description: 'A lightweight AI model with 3.8 billion parameters with performance overtaking similarly and larger sized models.', pulls: 240500, tags: ['3.8b'], added: '20241210' },
  'zephyr': { description: 'Zephyr is a series of fine-tuned versions of the Mistral and Mixtral models that are trained to act as helpful assistants.', pulls: 235900, tags: ['7b', '141b'] },
  'smollm2': { description: 'SmolLM2 is a family of compact language models available in three size: 135M, 360M, and 1.7B parameters.', pulls: 224100, tags: ['135m', '360m', '1.7b'], hasTools: true, added: '20241210' },
  'codestral': { description: 'Codestral is Mistral AI\'s first-ever code model designed for code generation tasks.', pulls: 216000, tags: ['22b'], added: '20240628' },
  'granite-code': { description: 'A family of open foundation models by IBM for Code Intelligence', pulls: 186700, tags: ['3b', '8b', '20b', '34b'], added: '20240628' },
  'starcoder': { description: 'StarCoder is a code generation model trained on 80+ programming languages.', pulls: 184800, tags: ['1b', '3b', '7b', '15b'] },
  'wizard-vicuna-uncensored': { description: 'Wizard Vicuna Uncensored is a 7B, 13B, and 30B parameter model based on Llama 2 uncensored by Eric Hartford.', pulls: 177200, tags: ['7b', '13b', '30b'] },
  'smollm': { description: '🪐 A family of small models with 135M, 360M, and 1.7B parameters, trained on a new high-quality dataset.', pulls: 176500, tags: ['135m', '360m', '1.7b'], added: '20241210' },
  'vicuna': { description: 'General use chat model based on Llama and Llama 2 with 2K to 16K context sizes.', pulls: 174400, tags: ['7b', '13b', '33b'] },
  'mistral-openorca': { description: 'Mistral OpenOrca is a 7 billion parameter model, fine-tuned on top of the Mistral 7B model using the OpenOrca dataset.', pulls: 165800, tags: ['7b'] },
  'mistral-small': { description: 'Mistral Small 3 sets a new benchmark in the “small” Large Language Models category below 70B.', pulls: 160800, tags: ['22b', '24b'], hasTools: true, added: '20250219' },
  'qwq': { description: 'QwQ is an experimental research model focused on advancing AI reasoning capabilities.', pulls: 159500, tags: ['32b'], hasTools: true, added: '20241210' },
  'llama2-chinese': { description: 'Llama 2 based model fine tuned to improve Chinese dialogue ability.', pulls: 148400, tags: ['7b', '13b'] },
  'dolphin3': { description: 'Dolphin 3.0 Llama 3.1 8B 🐬 is the next generation of the Dolphin series of instruct-tuned models designed to be the ultimate general purpose local model, enabling coding, math, agentic, function calling, and general use cases.', pulls: 143300, tags: ['8b'], added: '20250128' },
  'openchat': { description: 'A family of open-source models trained on a wide variety of data, surpassing ChatGPT on various benchmarks. Updated to version 3.5-0106.', pulls: 141600, tags: ['7b'] },
  'codegeex4': { description: 'A versatile model for AI software development scenarios, including code completion.', pulls: 136700, tags: ['9b'], added: '20241210' },
  'aya': { description: 'Aya 23, released by Cohere, is a new family of state-of-the-art, multilingual models that support 23 languages. ', pulls: 133600, tags: ['8b', '35b'], added: '20240628' },
  'codeqwen': { description: 'CodeQwen1.5 is a large language model pretrained on a large amount of code data.', pulls: 128700, tags: ['7b'], added: '20240501' },
  'deepseek-llm': { description: 'An advanced language model crafted with 2 trillion bilingual tokens.', pulls: 126800, tags: ['7b', '67b'] },
  'mistral-large': { description: 'Mistral Large 2 is Mistral\'s new flagship model that is significantly more capable in code generation, mathematics, and reasoning with 128k context window and support for dozens of languages.', pulls: 122100, tags: ['123b'], hasTools: true, added: '20241210' },
  'nous-hermes2': { description: 'The powerful family of models by Nous Research that excels at scientific discussion and coding tasks.', pulls: 121000, tags: ['10.7b', '34b'] },
  'glm4': { description: 'A strong multi-lingual general language model with competitive performance to Llama 3.', pulls: 120000, tags: ['9b'], added: '20241210' },
  'stable-code': { description: 'Stable Code 3B is a coding model with instruct and code completion variants on par with models such as Code Llama 7B that are 2.5x larger.', pulls: 119400, tags: ['3b'] },
  'openhermes': { description: 'OpenHermes 2.5 is a 7B model fine-tuned by Teknium on Mistral with fully open datasets.', pulls: 119300, tags: [] },
  'deepseek-v2': { description: 'A strong, economical, and efficient Mixture-of-Experts language model.', pulls: 118800, tags: ['16b', '236b'], added: '20240628' },
  'command-r-plus': { description: 'Command R+ is a powerful, scalable large language model purpose-built to excel at real-world enterprise use cases.', pulls: 118300, contextWindow: 128000, tags: ['104b'], hasTools: true, added: '20240501' },
  'tinydolphin': { description: 'An experimental 1.1B parameter model trained on the new Dolphin 2.8 dataset by Eric Hartford and based on TinyLlama.', pulls: 117900, tags: ['1.1b'] },
  'qwen2-math': { description: 'Qwen2 Math is a series of specialized math language models built upon the Qwen2 LLMs, which significantly outperforms the mathematical capabilities of open-source models and even closed-source models (e.g., GPT4o).', pulls: 117700, tags: ['1.5b', '7b', '72b'], hasTools: true, added: '20241210' },
  'wizardcoder': { description: 'State-of-the-art code generation model', pulls: 115500, tags: ['33b'] },
  'olmo2': { description: 'OLMo 2 is a new family of 7B and 13B models trained on up to 5T tokens. These models are on par with or better than equivalently sized fully open models, and competitive with open-weight models such as Llama 3.1 on English academic benchmarks.', pulls: 114200, tags: ['7b', '13b'], added: '20250128' },
  'bakllava': { description: 'BakLLaVA is a multimodal model consisting of the Mistral 7B base model augmented with the LLaVA architecture.', pulls: 107600, tags: ['7b'], hasVision: true },
  'moondream': { description: 'moondream2 is a small vision language model designed to run efficiently on edge devices.', pulls: 106900, tags: ['1.8b'], hasVision: true, added: '20240501' },
  'stablelm2': { description: 'Stable LM 2 is a state-of-the-art 1.6B and 12B parameter language model trained on multilingual data in English, Spanish, German, Italian, French, Portuguese, and Dutch.', pulls: 106300, tags: ['1.6b', '12b'] },
  'reflection': { description: 'A high-performing model trained with a new technique called Reflection-tuning that teaches a LLM to detect mistakes in its reasoning and correct course.', pulls: 102800, tags: ['70b'], added: '20241210' },
  'neural-chat': { description: 'A fine-tuned model based on Mistral with good coverage of domain and language.', pulls: 102700, tags: ['7b'] },
  'wizard-math': { description: 'Model focused on math and logic problems', pulls: 97300, tags: ['7b', '13b', '70b'] },
  'llama3-gradient': { description: 'This model extends LLama-3 8B\'s context length from 8k to over 1m tokens.', pulls: 97000, tags: ['8b', '70b'], added: '20240501' },
  'llama3-chatqa': { description: 'A model from NVIDIA based on Llama 3 that excels at conversational question answering (QA) and retrieval-augmented generation (RAG).', pulls: 93800, tags: ['8b', '70b'], added: '20240628' },
  'sqlcoder': { description: 'SQLCoder is a code completion model fined-tuned on StarCoder for SQL generation tasks', pulls: 89800, tags: ['7b', '15b'] },
  'xwinlm': { description: 'Conversational model based on Llama 2 that performs competitively on various benchmarks.', pulls: 83700, tags: ['7b', '13b'] },
  'dolphincoder': { description: 'A 7B and 15B uncensored variant of the Dolphin model family that excels at coding, based on StarCoder2.', pulls: 82600, tags: ['7b', '15b'], added: '20240501' },
  'nous-hermes': { description: 'General use models based on Llama and Llama 2 from Nous Research.', pulls: 81500, tags: ['7b', '13b'] },
  'bge-large': { description: 'Embedding model from BAAI mapping texts to vectors.', pulls: 81000, tags: ['335m'], isEmbeddings: true, added: '20241210' },
  'phind-codellama': { description: 'Code generation model based on Code Llama.', pulls: 80700, tags: ['34b'] },
  'yarn-llama2': { description: 'An extension of Llama 2 that supports a context of up to 128k tokens.', pulls: 78300, contextWindow: 128000, tags: ['7b', '13b'] },
  'solar': { description: 'A compact, yet powerful 10.7B large language model designed for single-turn conversation.', pulls: 77800, tags: ['10.7b'] },
  'llava-phi3': { description: 'A new small LLaVA model fine-tuned from Phi 3 Mini.', pulls: 77500, tags: ['3.8b'], hasVision: true, added: '20240628' },
  'starling-lm': { description: 'Starling is a large language model trained by reinforcement learning from AI feedback focused on improving chatbot helpfulness.', pulls: 76700, tags: ['7b'] },
  'wizardlm': { description: 'General use model based on Llama 2.', pulls: 75500, tags: [] },
  'yi-coder': { description: 'Yi-Coder is a series of open-source code language models that delivers state-of-the-art coding performance with fewer than 10 billion parameters.', pulls: 74900, tags: ['1.5b', '9b'], added: '20241210' },
  'athene-v2': { description: 'Athene-V2 is a 72B parameter model which excels at code completion, mathematics, and log extraction tasks.', pulls: 74800, tags: ['72b'], hasTools: true, added: '20241210' },
  'granite3.1-dense': { description: 'The IBM Granite 2B and 8B models are text-only dense LLMs trained on over 12 trillion tokens of data, demonstrated significant improvements over their predecessors in performance and speed in IBM’s initial testing.', pulls: 72800, tags: ['2b', '8b'], hasTools: true, added: '20250128' },
  'internlm2': { description: 'InternLM2.5 is a 7B parameter model tailored for practical scenarios with outstanding reasoning capability.', pulls: 72000, tags: ['1m', '1.8b', '7b', '20b'], added: '20241210' },
  'samantha-mistral': { description: 'A companion assistant trained in philosophy, psychology, and personal relationships. Based on Mistral.', pulls: 68700, tags: ['7b'] },
  'falcon': { description: 'A large language model built by the Technology Innovation Institute (TII) for use in summarization, text generation, and chat bots.', pulls: 68400, tags: ['7b', '40b', '180b'] },
  'nemotron-mini': { description: 'A commercial-friendly small language model by NVIDIA optimized for roleplay, RAG QA, and function calling.', pulls: 65000, tags: ['4b'], hasTools: true, added: '20241210' },
  'nemotron': { description: 'Llama-3.1-Nemotron-70B-Instruct is a large language model customized by NVIDIA to improve the helpfulness of LLM generated responses to user queries.', pulls: 64300, tags: ['70b'], hasTools: true, added: '20241210' },
  'dolphin-phi': { description: 'A 2.7B uncensored Dolphin model by Eric Hartford, based on the Phi language model by Microsoft Research.', pulls: 63300, tags: ['2.7b'] },
  'orca2': { description: 'Orca 2 is built by Microsoft research, and are a fine-tuned version of Meta\'s Llama 2 models.  The model is designed to excel particularly in reasoning.', pulls: 62600, tags: ['7b', '13b'] },
  'wizardlm-uncensored': { description: 'Uncensored version of Wizard LM model', pulls: 59200, tags: ['13b'] },
  'stable-beluga': { description: 'Llama 2 based model fine tuned on an Orca-style dataset. Originally called Free Willy.', pulls: 58500, tags: ['7b', '13b', '70b'] },
  'deepscaler': { description: 'A fine-tuned version of Deepseek-R1-Distilled-Qwen-1.5B that surpasses the performance of OpenAI’s o1-preview with just 1.5B parameters on popular math evaluations.', pulls: 53300, tags: ['1.5b'], added: '20250219' },
  'granite3-dense': { description: 'The IBM Granite 2B and 8B models are designed to support tool-based use cases and support for retrieval augmented generation (RAG), streamlining code generation, translation and bug fixing.', pulls: 53200, tags: ['2b', '8b'], hasTools: true, added: '20241210' },
  // NOTE: we had older/low-pull models here, but they are not in the list anymore, as it's noise. We removed around 45 of those.
};
// export const OLLAMA_LAST_UPDATE: string = '20250219';
export const OLLAMA_PREV_UPDATE: string = '20241210';
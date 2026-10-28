---
layout: post
title: "Extending TVA With Trial-to-Trial Variability in Processing Speed: A Monte Carlo Simulation Study"
date: 2026-10-28 06:00:00 +0100
categories: updates
tags: [News, Publication, TVA, Attention, Computational Modeling, Monte Carlo]
excerpt: "My new paper in Computational Brain & Behavior introduces an extended TVA count model with trial-to-trial variability in processing speed."
---

Exciting news! I’m happy to share that my new paper, **"Extending TVA With Trial-to-Trial Variability in Processing Speed: A Monte Carlo Simulation Study,"** has now been published in *Computational Brain & Behavior*.

![Computational Brain & Behavior paper cover](/assets/images/compbraincover.png)

In cognitive science, Bundesen’s Theory of Visual Attention (TVA) has long been a key framework for measuring visual processing speed ($C$), storage capacity ($K$), and perceptual thresholds ($t_0$). Traditional whole-report implementations, however, assume that an individual’s processing speed remains fixed across trials within a condition structure.

In this paper, I introduce an extension to the TVA count model that explicitly incorporates trial-to-trial fluctuations in processing speed using a Gamma distribution.

### Key insights from the study

- **Unmodelled variability creates systematic bias:**  
  When processing speed fluctuates substantially across trials, fitting a standard fixed-speed model produces a systematic negative bias in estimated processing speed ($C$) and threshold ($t_0$). In group comparisons, unmodelled variance can be misread as a capacity deficit.

- **Speed vs. threshold variability:**  
  Speed variability ($C$) and threshold variability ($t_0$) leave distinct signatures in whole-report data. Speed fluctuations primarily affect longer exposure durations, while threshold jitter is concentrated at short exposures. Crucially, the standard $t_0$-variability model does not register speed variability.

- **A conditional complement:**  
  The extended model is best viewed as a targeted complement rather than a blanket replacement. With large trial counts (about 400+ trials), it improves parameter recovery under moderate to strong variability. With smaller trial counts (about 100 trials), standard models remain the better default because of parameter estimation costs.

Huge thanks to the reviewers and editors for their constructive feedback throughout the review process.

You can read the full open-access paper here:

- Springer DOI page: [https://doi.org/10.1007/s42113-026-00340-5](https://doi.org/10.1007/s42113-026-00340-5)
- PDF on this website: [/assets/uploads/extending-tva-published.pdf](/assets/uploads/extending-tva-published.pdf)
- Simulation code and data: [https://github.com/Aaronkhodami/Extending-TVA-With-Trial-to-Trial-Variability-in-Processing-Speed-A-Monte-Carlo-Simulation-Study](https://github.com/Aaronkhodami/Extending-TVA-With-Trial-to-Trial-Variability-in-Processing-Speed-A-Monte-Carlo-Simulation-Study)

Cite it as:

Khodami, A. Extending TVA With Trial-to-Trial Variability in Processing Speed: A Monte Carlo Simulation Study. *Comput Brain Behav* (2026). https://doi.org/10.1007/s42113-026-00340-5

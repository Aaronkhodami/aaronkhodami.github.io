---
layout: post
title: "etformat 1.3.0 is Published: A Major Update to EyeLink Eye Tracker Package is Now Live"
date: 2026-08-29 12:00:00 +0100
categories: [releases, research, eye-tracking]
tags: [Python, Eye-Tracking, EDF, Data-Analysis, Open-Source, PyPI, Neuroscience, EyeLink]
excerpt: "etformat 1.3.0 is now available on PyPI with significant improvements and new features for EyeLink eye-tracker data processing and analysis."
---

## etformat 1.3.0: Major Release Now Available

I'm thrilled to announce the release of **etformat 1.3.0**—a major update to the Python package for processing, converting, and analyzing EyeLink eye-tracker data. This version brings significant enhancements and new capabilities for researchers and engineers working with eye-tracking data.

## What's New in 1.3.0?

This major release includes substantial improvements to:

- **Enhanced Data Processing**: Improved performance and accuracy in EDF file parsing and data extraction
- **Advanced Fixation & Saccade Detection**: Better algorithms for identifying and analyzing eye-movement events
- **Extended Export Formats**: Support for additional output formats to integrate seamlessly with modern data science workflows
- **Improved Visualization Tools**: More customizable and publication-ready plotting capabilities
- **Better Error Handling**: More informative error messages and robust data validation
- **API Enhancements**: Refined interfaces for easier integration into research pipelines

## About etformat

**etformat** is a comprehensive Python package designed for researchers, neuroscientists, and usability engineers working with eye-tracking data from EyeLink systems. It simplifies the extraction, conversion, and analysis of EDF (EyeLink Data Format) files—the standard format produced by SR Research EyeLink eye-trackers.

### Key Capabilities

- **EDF to CSV Conversion**: Export eye-tracking data to industry-standard CSV format
- **Fixation & Saccade Analysis**: Automatically detect and analyze eye-movement events
- **Calibration Validation**: Verify calibration quality with built-in validation routines
- **Data Visualization**: Generate publication-ready plots of gaze movements
- **Flexible Export Options**: Multiple output formats for downstream analysis

## Installation

Install the latest version with a single command:

```bash
pip install etformat
```

Upgrade from an earlier version:

```bash
pip install --upgrade etformat
```

### System Requirements

- **Python** >= 3.6
- **EyeLink Developers Kit** (specifically the `edfapi` library from SR Research)

> **Important**: The `edfapi` library must be installed separately after registering on the [SR Research support site](https://www.sr-research.com/). Set the `EDFAPI_LIB` environment variable if needed to specify its location.

## Use Cases

etformat 1.3.0 is ideal for:

- **Academic Research**: Streamline data preprocessing in cognitive neuroscience, psychology, and vision science
- **Usability Testing**: Analyze gaze patterns during interface evaluation and user experience research
- **Clinical Applications**: Process eye-tracking data in diagnostic and assessment workflows
- **Machine Learning**: Prepare eye-tracking features for classification and prediction models
- **Educational Research**: Study learning patterns through eye-movement analysis
- **Human-Computer Interaction**: Evaluate attention and engagement in HCI studies

## Documentation & Resources

Access comprehensive guides and examples:

- **PyPI Package**: [https://pypi.org/project/etformat/](https://pypi.org/project/etformat/)
- **GitHub Repository**: [https://github.com/Aaronkhodami/etformat](https://github.com/Aaronkhodami/etformat)
- **Official Documentation**: [https://aaronkhodami.org/etformat/intro.html](https://aaronkhodami.org/etformat/intro.html)

## Why This Update Matters

Eye-tracking research continues to expand across cognitive science, neuroscience, usability testing, and clinical diagnostics. Professional-grade analysis tools have traditionally been expensive or proprietary. **etformat 1.3.0** provides researchers with a powerful, open-source alternative that maintains compatibility with the EyeLink ecosystem while enabling reproducible, shareable research workflows.

This major release reflects community feedback and industry best practices in eye-tracking data analysis.

## Get Started Today

1. **Install**: `pip install etformat`
2. **Learn**: Visit the [documentation](https://aaronkhodami.org/etformat/intro.html)
3. **Explore**: Check out examples in the [GitHub repository](https://github.com/Aaronkhodami/etformat)
4. **Contribute**: Submit issues, feature requests, or pull requests on [GitHub](https://github.com/Aaronkhodami/etformat/issues)

## Author & License

**Author**: Mohammad Ahsan Khodami  
**License**: MIT (Open Source)

---

**Have you used etformat in your research? Share your feedback, use cases, or questions in the comments below. I'd love to hear how this tool is advancing eye-tracking science in your field!**


<?php
defined("ABSPATH") || exit();

class SuperbInfoContentConfig
{
    const THEME_LINK = 'https://superbthemes.com/imagegridly/';
    const DEMO_LINK = 'https://superbthemes.com/demo/imagegridly/';

    private $FEATURES = array();

    public function __construct()
    {
        $this->AddFeature(__("Customize Header Logo, Text & Background Color", "imagegridly"), "purple-paint-brush.svg");
        $this->AddFeature(__("Translation Ready", "imagegridly"), "purple-article-medium.svg");
        $this->AddFeature(__("Fully SEO Optimized", "imagegridly"), "purple-gauge.svg");
        $this->AddFeature(__("Customize All Fonts", "imagegridly"), "purple-article-medium.svg");
        $this->AddFeature(__("Customize All Colors", "imagegridly"), "purple-paint-brush.svg");
        $this->AddFeature(__("Importable Demo Content", "imagegridly"), "purple-images.svg");
        $this->AddFeature(__("Elementor Compatible", "imagegridly"), "purple-elementor-logo.svg");
        $this->AddFeature(__("Replace Copyright Text", "imagegridly"), "purple-copyright.svg");
        $this->AddFeature(__("Full-Width Page Template", "imagegridly"), "purple-frame-corners.svg");
        $this->AddFeature(__("Access All Child Themes", "imagegridly"), "purple-images.svg");
        $this->AddFeature(__("Customer Support and Documentation", "imagegridly"), "purple-files.svg");
        $this->AddFeature(__("Multiple Website Support", "imagegridly"), "purple-files.svg");

        $this->AddFeature(__("Custom Text On Header Image", "imagegridly"), "gear.svg");
        $this->AddFeature(__("Only Show Header Image On Front Page", "imagegridly"), "gear.svg");
        $this->AddFeature(__("Show Header Everywhere", "imagegridly"), "gear.svg");
        $this->AddFeature(__("Only Show Upper Widgets On Front Page", "imagegridly"), "gear.svg");
        $this->AddFeature(__("Hide/Show Featured Images On Posts and Pages", "imagegridly"), "gear.svg");

        $this->AddFeature(__("Remove 'Tag' from Tag Page Title", "imagegridly"), "purple-article-medium.svg");
        $this->AddFeature(__("Remove 'Author' from Author Page Title", "imagegridly"), "purple-article-medium.svg");
        $this->AddFeature(__("Remove 'Category' from Category Page Title", "imagegridly"), "purple-article-medium.svg");
    }

    private function AddFeature($title, $icon)
    {
        $this->FEATURES[] = array(
            "title" => $title,
            "icon" => $icon
        );
    }

    public function GetFeatures()
    {
        return $this->FEATURES;
    }
}

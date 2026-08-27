/* ================================================================== *
 * Spring Dental — includes.js
 * Shared header + footer injection (single source of truth), plus
 * progressive enhancement (drawer, sticky compaction, mega-menu a11y).
 * Matches the Just Smilez / Kora static-site shared-chrome pattern.
 * ================================================================== */
(function () {
  "use strict";

  window.SPRING_DENTAL = {
    name: "Spring Dental",
    phone: "+19372949400",
    phoneDisplay: "(937) 294-9400",
    email: "rk_gampa@hotmail.com",
    address: "5515 N Springboro Pike, Dayton, OH 45449"
  };

  var SERVICE_PAGES = {
    "services.html": true,
    "general-dentistry.html": true,
    "cosmetic-dentistry.html": true,
    "dental-implants.html": true,
    "orthodontics.html": true,
    "oral-surgery.html": true,
    "emergency-dentistry.html": true
  };

  var SHARED_HEADER = `<header class="site-header">
  <div class="container-wide">
    <nav class="navbar" aria-label="Primary">
      <a class="brand" href="index.html" aria-label="Spring Dental home">
        <span class="brand__mark"><svg viewBox="0 0 64 64" fill="none" aria-hidden="true"><path fill="currentColor" d="M32 13.5c-6.4-5.2-14.2-5.6-18.7-1.3-4.9 4.7-4.6 12.4-2.7 19.6 1.2 4.6 2.1 7.9 2.8 12.4.7 4.6 1.4 9.2 4.7 10.1 3.5 1 4.9-3.1 5.9-7.4 1-4.2 1.9-9.2 5.9-9.2s4.9 5 5.9 9.2c1 4.3 2.4 8.4 5.9 7.4 3.3-.9 4-5.5 4.7-10.1.7-4.5 1.6-7.8 2.8-12.4 1.9-7.2 2.2-14.9-2.7-19.6-4.5-4.3-12.3-3.9-18.7 1.3z"/><path fill="#8fe3d6" d="M32 15.2c0-4.2 2.2-7.9 6.1-9.4-.2 4.2-2.1 8-6.1 9.4z"/><path fill="#8fe3d6" opacity="0.85" d="M32 15.2c0-3.4-1.8-6.4-4.9-7.6.1 3.4 1.7 6.5 4.9 7.6z"/></svg></span>
        <span><span class="brand__name">Spring<b>Dental</b></span>
        <span class="brand__tag">Dayton, Ohio</span></span>
      </a>
      <div class="primary-nav">
        <ul role="list">
          <li><a class="nav-link" href="index.html">Home</a></li>
          <li><a class="nav-link" href="about.html">About</a></li>
          <li class="has-mega">
            <a class="nav-link" href="services.html">Services <svg class="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg></a>
            <div class="mega" role="menu" aria-label="Services">
              <div class="mega__grid"><a class="mega__item" href="general-dentistry.html"><span class="mega__ico"><svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 5.5C10 3.8 7.4 3.6 6 5c-1.6 1.6-1.5 4.1-.9 6.5.4 1.5.7 2.6.9 4 .2 1.5.5 3 1.6 3 1.2 0 1.5-1.4 1.8-2.8.3-1.4.6-3 2.6-3s2.3 1.6 2.6 3c.3 1.4.6 2.8 1.8 2.8 1.1 0 1.4-1.5 1.6-3 .2-1.4.5-2.5.9-4C19.5 9.1 19.6 6.6 18 5c-1.4-1.4-4-1.2-6 .5z"/></svg></span><span><span class="mega__t">General &amp; Preventive</span><span class="mega__d">Cleanings, exams, fillings, crowns &amp; bridges that keep your whole family healthy.</span></span></a><a class="mega__item" href="cosmetic-dentistry.html"><span class="mega__ico"><svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3l1.8 4.7L18.5 9.5 13.8 11.3 12 16l-1.8-4.7L5.5 9.5l4.7-1.8z"/><path d="M18 15l.7 1.8 1.8.7-1.8.7L18 20l-.7-1.8L15.5 17.5l1.8-.7z"/></svg></span><span><span class="mega__t">Cosmetic Dentistry</span><span class="mega__d">Whitening, veneers, bonding and CEREC restorations for a confident, natural smile.</span></span></a><a class="mega__item" href="dental-implants.html"><span class="mega__ico"><svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2c2 0 3.5 1.4 3.5 3.2 0 1-.5 1.8-1 2.4M12 2c-2 0-3.5 1.4-3.5 3.2 0 1 .5 1.8 1 2.4M9.5 8h5M10 11h4M10.5 14h3M11 17h2M11.5 20h1"/></svg></span><span><span class="mega__t">Dental Implants</span><span class="mega__d">Permanent, natural-looking tooth replacement — single implants to full arches.</span></span></a><a class="mega__item" href="orthodontics.html"><span class="mega__ico"><svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 9v6M21 9v6M6 8v8M6 12h12M18 8v8M10 8v3M14 8v3M10 13v3M14 13v3"/></svg></span><span><span class="mega__t">Orthodontics &amp; Invisalign</span><span class="mega__d">Straighten your teeth discreetly with Invisalign clear aligners and clear braces.</span></span></a><a class="mega__item" href="oral-surgery.html"><span class="mega__ico"><svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 21l9-9M14 10l7-7-1 6-6 1zM11 13l3 3"/></svg></span><span><span class="mega__t">Oral Surgery</span><span class="mega__d">Wisdom teeth, extractions and oral &amp; maxillofacial procedures, done gently.</span></span></a><a class="mega__item" href="emergency-dentistry.html"><span class="mega__ico"><svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z"/><path d="M12 8v6M9 11h6"/></svg></span><span><span class="mega__t">Emergency Care</span><span class="mega__d">Same-day relief for toothaches, broken teeth and dental emergencies.</span></span></a></div>
              <div class="mega__foot">
                <span>Comprehensive care for the whole family, all under one roof.</span>
                <a class="card__link" href="services.html">All services <svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
              </div>
            </div>
          </li>
          <li><a class="nav-link" href="reviews.html">Reviews</a></li>
          <li><a class="nav-link" href="new-patients.html">New Patients</a></li>
          <li><a class="nav-link" href="contact.html">Contact</a></li>
        </ul>
      </div>
      <div class="nav-actions">
        <a class="btn btn--ghost" href="tel:+19372949400"><svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg> Call</a>
        <a class="btn" href="appointment.html"><svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg> Book Visit</a>
      </div>
      <button class="nav-toggle" aria-label="Open menu" aria-expanded="false" aria-controls="drawer">
        <span></span><span></span><span></span>
      </button>
    </nav>
  </div>
</header>
<div class="scrim"></div>
<aside class="drawer" id="drawer" aria-hidden="true" aria-label="Mobile menu">
  <div class="drawer__head">
    <a class="brand" href="index.html" aria-label="Spring Dental home">
      <span class="brand__mark"><svg viewBox="0 0 64 64" fill="none" aria-hidden="true"><path fill="currentColor" d="M32 13.5c-6.4-5.2-14.2-5.6-18.7-1.3-4.9 4.7-4.6 12.4-2.7 19.6 1.2 4.6 2.1 7.9 2.8 12.4.7 4.6 1.4 9.2 4.7 10.1 3.5 1 4.9-3.1 5.9-7.4 1-4.2 1.9-9.2 5.9-9.2s4.9 5 5.9 9.2c1 4.3 2.4 8.4 5.9 7.4 3.3-.9 4-5.5 4.7-10.1.7-4.5 1.6-7.8 2.8-12.4 1.9-7.2 2.2-14.9-2.7-19.6-4.5-4.3-12.3-3.9-18.7 1.3z"/><path fill="#8fe3d6" d="M32 15.2c0-4.2 2.2-7.9 6.1-9.4-.2 4.2-2.1 8-6.1 9.4z"/><path fill="#8fe3d6" opacity="0.85" d="M32 15.2c0-3.4-1.8-6.4-4.9-7.6.1 3.4 1.7 6.5 4.9 7.6z"/></svg></span>
      <span class="brand__name">Spring<b>Dental</b></span>
    </a>
    <button class="drawer__close" aria-label="Close menu"><svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg></button>
  </div>
  <nav aria-label="Mobile">
    <a class="d-link" href="index.html">Home</a>
    <a class="d-link" href="about.html">About</a>
    <div class="d-group">
      <div class="d-group__head">
        <a class="d-link" href="services.html">Services</a>
        <button class="d-group__toggle" aria-label="Toggle services" aria-expanded="false"><svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg></button>
      </div>
      <div class="d-sub"><a href="general-dentistry.html">General &amp; Preventive</a><a href="cosmetic-dentistry.html">Cosmetic Dentistry</a><a href="dental-implants.html">Dental Implants</a><a href="orthodontics.html">Orthodontics &amp; Invisalign</a><a href="oral-surgery.html">Oral Surgery</a><a href="emergency-dentistry.html">Emergency Care</a><a href="services.html">All services</a></div>
    </div>
    <a class="d-link" href="reviews.html">Reviews</a>
    <a class="d-link" href="new-patients.html">New Patients</a>
    <a class="d-link" href="contact.html">Contact</a>
    <div class="drawer__cta">
      <a class="btn btn--block" href="appointment.html"><svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg> Book Appointment</a>
      <a class="btn btn--ghost btn--block" href="tel:+19372949400"><svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg> (937) 294-9400</a>
    </div>
  </nav>
</aside>`;

  var SHARED_FOOTER = `<footer class="site-footer footer">
  <div class="container-wide footer__top">
    <div class="footer__about">
      <a class="brand" href="index.html" aria-label="Spring Dental home">
        <span class="brand__mark"><svg viewBox="0 0 64 64" fill="none" aria-hidden="true"><path fill="currentColor" d="M32 13.5c-6.4-5.2-14.2-5.6-18.7-1.3-4.9 4.7-4.6 12.4-2.7 19.6 1.2 4.6 2.1 7.9 2.8 12.4.7 4.6 1.4 9.2 4.7 10.1 3.5 1 4.9-3.1 5.9-7.4 1-4.2 1.9-9.2 5.9-9.2s4.9 5 5.9 9.2c1 4.3 2.4 8.4 5.9 7.4 3.3-.9 4-5.5 4.7-10.1.7-4.5 1.6-7.8 2.8-12.4 1.9-7.2 2.2-14.9-2.7-19.6-4.5-4.3-12.3-3.9-18.7 1.3z"/><path fill="#8fe3d6" d="M32 15.2c0-4.2 2.2-7.9 6.1-9.4-.2 4.2-2.1 8-6.1 9.4z"/><path fill="#8fe3d6" opacity="0.85" d="M32 15.2c0-3.4-1.8-6.4-4.9-7.6.1 3.4 1.7 6.5 4.9 7.6z"/></svg></span>
        <span class="brand__name">Spring<b>Dental</b></span>
      </a>
      <p>Gentle, modern dentistry for families across the Dayton area — with Dr. Ravinder Gampa and a team that treats you like one of our own.</p>
      <div class="footer__socials">
        <a href="https://www.facebook.com/Spring-Dental-Ravinder-Gampa-DDS-1383730631864830/" target="_blank" rel="noopener" aria-label="Facebook"><svg class="ico" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a>
        <a href="https://twitter.com/SpringDentalDDS" target="_blank" rel="noopener" aria-label="X (Twitter)"><svg class="ico" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4 4l7.7 10.3L4.5 20h2.2l5.2-5.6L16 20h4l-8-10.7L18.7 4h-2.2l-4.7 5-3.8-5z"/></svg></a>
      </div>
    </div>
    <div>
      <h4>Services</h4>
      <ul role="list"><li><a href="general-dentistry.html">General &amp; Preventive</a></li><li><a href="cosmetic-dentistry.html">Cosmetic Dentistry</a></li><li><a href="dental-implants.html">Dental Implants</a></li><li><a href="orthodontics.html">Orthodontics &amp; Invisalign</a></li><li><a href="oral-surgery.html">Oral Surgery</a></li><li><a href="emergency-dentistry.html">Emergency Care</a></li><li><a href="services.html">All services</a></li></ul>
    </div>
    <div>
      <h4>Practice</h4>
      <ul role="list">
        <li><a href="about.html">About &amp; Dr. Gampa</a></li>
        <li><a href="new-patients.html">New Patients</a></li>
        <li><a href="reviews.html">Reviews</a></li>
        <li><a href="appointment.html">Book Appointment</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
    </div>
    <div>
      <h4>Get in touch</h4>
      <ul role="list" class="footer__contact">
        <li><svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg><span>5515 N Springboro Pike,<br>Dayton, OH 45449</span></li>
        <li><svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg><a href="tel:+19372949400">(937) 294-9400</a></li>
        <li><svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg><a href="mailto:rk_gampa@hotmail.com">rk_gampa@hotmail.com</a></li>
        <li><svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg><span>Mon–Thu: 8:00 AM – 5:00 PM<br>Fri–Sun: Closed</span></li>
      </ul>
    </div>
  </div>
  <div class="container-wide footer__bottom">
    <p>&copy; <span id="year">2026</span> Spring Dental. All rights reserved.</p>
    <nav aria-label="Legal">
      <a href="privacy-policy.html">Privacy Policy</a>
      <a href="terms.html">Terms of Use</a>
      <a href="contact.html">Contact</a>
    </nav>
  </div>
</footer>`;

  function ready(fn) {
    if (document.readyState !== "loading") fn();
    else document.addEventListener("DOMContentLoaded", fn);
  }

  function injectSharedLayout() {
    var headerMount = document.getElementById("site-header");
    var footerMount = document.getElementById("site-footer");
    if (headerMount) headerMount.innerHTML = SHARED_HEADER;
    if (footerMount) footerMount.innerHTML = SHARED_FOOTER;
    setActiveNavLinks();
  }

  function setActiveNavLinks() {
    var path = (window.location.pathname.split("/").pop() || "index.html").toLowerCase();
    if (!path) path = "index.html";
    var serviceActive = !!SERVICE_PAGES[path];

    document.querySelectorAll(".nav-link, .d-link, .mega a, .d-sub a, footer a").forEach(function (link) {
      var href = (link.getAttribute("href") || "").toLowerCase();
      if (!href || href.charAt(0) === "#" || href.indexOf("tel:") === 0 || href.indexOf("mailto:") === 0 || href.indexOf("http") === 0) return;

      var match = href === path;
      if (!match && serviceActive && href === "services.html" && (link.classList.contains("nav-link") || link.classList.contains("d-link"))) {
        match = true;
      }
      if (match) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }

  function enhanceChrome() {
    var doc = document;

    /* ---- sticky header compaction ---- */
    var header = doc.querySelector(".site-header");
    if (header) {
      var onScroll = function () {
        if (window.scrollY > 24) header.classList.add("is-stuck");
        else header.classList.remove("is-stuck");
      };
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
    }

    /* ---- mobile drawer ---- */
    var toggle = doc.querySelector(".nav-toggle");
    var drawer = doc.getElementById("drawer");
    var scrim = doc.querySelector(".scrim");

    function setDrawer(open) {
      if (!drawer) return;
      drawer.classList.toggle("is-open", open);
      if (scrim) scrim.classList.toggle("is-open", open);
      if (toggle) toggle.setAttribute("aria-expanded", open ? "true" : "false");
      drawer.setAttribute("aria-hidden", open ? "false" : "true");
      doc.documentElement.style.overflow = open ? "hidden" : "";
      if (open) {
        var first = drawer.querySelector("a, button");
        if (first) first.focus();
      }
    }
    if (toggle) toggle.addEventListener("click", function () {
      setDrawer(!drawer.classList.contains("is-open"));
    });
    if (scrim) scrim.addEventListener("click", function () { setDrawer(false); });
    var closeBtn = doc.querySelector(".drawer__close");
    if (closeBtn) closeBtn.addEventListener("click", function () { setDrawer(false); });
    doc.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && drawer && drawer.classList.contains("is-open")) setDrawer(false);
    });

    /* ---- mobile nested submenu toggles ---- */
    doc.querySelectorAll(".d-group__toggle").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var sub = btn.closest(".d-group").querySelector(".d-sub");
        var open = sub.classList.toggle("is-open");
        btn.setAttribute("aria-expanded", open ? "true" : "false");
      });
    });

    /* ---- desktop mega-menu keyboard support ---- */
    doc.querySelectorAll(".has-mega").forEach(function (item) {
      var link = item.querySelector(".nav-link");
      if (!link) return;
      link.addEventListener("keydown", function (e) {
        if (e.key === "ArrowDown") {
          e.preventDefault();
          var first = item.querySelector(".mega a");
          if (first) first.focus();
        }
      });
    });
  }

  ready(function () {
    injectSharedLayout();
    enhanceChrome();
    var yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = String(new Date().getFullYear());
  });
})();

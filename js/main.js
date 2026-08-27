/* ================================================================== *
 * Spring Dental — main.js
 * Reveal-on-scroll, hours highlighting, footer year, FAQ single-open,
 * and Kora form submission (with reCAPTCHA v2 checkbox support).
 * ================================================================== */
(function () {
  "use strict";
  var doc = document;

  /* ---- reveal on scroll (safety net reveals everything) ---- */
  var reveals = [].slice.call(doc.querySelectorAll("[data-reveal]"));
  if (reveals.length) {
    if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); }
        });
      }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
      reveals.forEach(function (el) { io.observe(el); });
      // safety net: reveal all after 2.5s no matter what
      setTimeout(function () { reveals.forEach(function (el) { el.classList.add("is-in"); }); }, 2500);
    } else {
      reveals.forEach(function (el) { el.classList.add("is-in"); });
    }
  }

  /* ---- hero video: keep muted autoplay ---- */
  var heroVideo = doc.getElementById("heroVideo");
  if (heroVideo) {
    var tryPlay = function () { var p = heroVideo.play(); if (p && p.catch) p.catch(function () {}); };
    tryPlay();
  }

  /* ---- footer year ---- */
  var y = doc.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

  /* ---- highlight today's hours ---- */
  var hoursTable = doc.querySelector("[data-hours]");
  if (hoursTable) {
    var today = new Date().getDay(); // 0=Sun
    var row = hoursTable.querySelector('tr[data-day="' + today + '"]');
    if (row) row.classList.add("today");
  }

  /* ---- FAQ: keep only one open at a time ---- */
  var faqs = [].slice.call(doc.querySelectorAll(".faq details"));
  faqs.forEach(function (d) {
    d.addEventListener("toggle", function () {
      if (d.open) faqs.forEach(function (o) { if (o !== d) o.open = false; });
    });
  });

  /* ---- Kora form submission ---- */
  var forms = [].slice.call(doc.querySelectorAll("form[data-kora-form]"));
  forms.forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var status = form.querySelector(".form-status");
      var btn = form.querySelector('button[type="submit"]');
      var cfg = window.KORA_CONFIG || {};
      var base = cfg.apiBaseUrl || "";

      function show(kind, msg) {
        if (!status) return;
        status.className = "form-status " + kind;
        status.textContent = msg;
      }

      // reCAPTCHA (if present)
      var token = "";
      if (window.grecaptcha && typeof window.grecaptcha.getResponse === "function") {
        token = window.grecaptcha.getResponse();
        if (!token) { show("err", "Please confirm you are not a robot."); return; }
      }

      var data = {};
      new FormData(form).forEach(function (v, k) { data[k] = v; });
      data.businessId = cfg.businessId || "";
      data.source = "website";
      data.page = location.pathname;
      if (token) data.recaptchaToken = token;

      if (btn) { btn.disabled = true; btn.dataset.label = btn.textContent; btn.textContent = "Sending…"; }

      fetch(base + "/api/v1/public/forms/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      }).then(function (r) {
        if (!r.ok) throw new Error("bad status " + r.status);
        return r.json().catch(function () { return {}; });
      }).then(function () {
        form.reset();
        if (window.grecaptcha) try { window.grecaptcha.reset(); } catch (e) {}
        show("ok", "Thank you — your request has been received. Our team will call you shortly to confirm.");
      }).catch(function () {
        show("err", "Sorry, something went wrong. Please call us at (937) 294-9400 and we'll help right away.");
      }).finally(function () {
        if (btn) { btn.disabled = false; btn.textContent = btn.dataset.label || "Submit"; }
      });
    });
  });
})();

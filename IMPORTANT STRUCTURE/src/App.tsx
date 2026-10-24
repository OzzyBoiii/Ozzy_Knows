/** @format */

import { useEffect } from "react";
import "./App.css";

function App() {
  // ============================================================
  // SAV JAVASCRIPT KOPIRAN OVDJE (ispred return)
  // ============================================================

  /* SECURITY CONFIG & STATE */
  const SECURITY_CONFIG = {
    MASTER_PASSWORD: "cross123!",
    MAX_ATTEMPTS: 5,
    LOCKOUT_MINUTES: 1,
  };
  let securityState = {
    failedAttempts: parseInt(localStorage.getItem("sz_attempts") || "0"),
    lockoutUntil: parseInt(localStorage.getItem("sz_lockout") || "0"),
    pendingWindow: null,
  };

  function handleProtectedButton(windowId: string) {
    securityState.pendingWindow = windowId;
    if (Date.now() < securityState.lockoutUntil) {
      openPwModal();
      showLockoutScreen();
      startLockoutTimer();
      return;
    }
    openPwModal();
  }

  function openPwModal() {
    const overlay = document.getElementById("pw-overlay");
    if (overlay) overlay.classList.add("open");
    const inp = document.getElementById("password-input") as HTMLInputElement;
    if (inp) {
      inp.value = "";
      inp.type = "password";
    }
    const eye = document.getElementById("pw-eye");
    if (eye) eye.className = "fas fa-eye";
    const err = document.getElementById("error-message");
    if (err) err.style.display = "none";
    if (securityState.failedAttempts > 0) updateAttemptsDisplay();
    if (Date.now() < securityState.lockoutUntil) {
      showLockoutScreen();
    } else {
      showLoginScreen();
      if (inp) setTimeout(() => inp.focus(), 50);
    }
  }

  function closePwModal() {
    const overlay = document.getElementById("pw-overlay");
    if (overlay) overlay.classList.remove("open");
    securityState.pendingWindow = null;
  }

  function showLoginScreen() {
    const login = document.getElementById("login-container");
    const lockout = document.getElementById("lockout-container");
    if (login) login.classList.remove("hidden");
    if (lockout) lockout.classList.add("hidden");
  }
  function showLockoutScreen() {
    const login = document.getElementById("login-container");
    const lockout = document.getElementById("lockout-container");
    if (login) login.classList.add("hidden");
    if (lockout) lockout.classList.remove("hidden");
  }

  function togglePasswordVisibility() {
    const inp = document.getElementById("password-input") as HTMLInputElement;
    const icon = document.getElementById("pw-eye");
    if (!inp || !icon) return;
    if (inp.type === "password") {
      inp.type = "text";
      icon.className = "fas fa-eye-slash";
    } else {
      inp.type = "password";
      icon.className = "fas fa-eye";
    }
  }

  function checkPassword() {
    if (Date.now() < securityState.lockoutUntil) {
      showLockoutScreen();
      startLockoutTimer();
      return;
    }
    const inp = document.getElementById("password-input") as HTMLInputElement;
    const password = inp ? inp.value.trim() : "";
    const errEl = document.getElementById("error-message");
    if (errEl) errEl.style.display = "none";
    if (!password) {
      showError("Please enter the master password");
      return;
    }
    const btn = document.getElementById("login-button") as HTMLButtonElement;
    if (btn) {
      btn.disabled = true;
      btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Verifying...';
    }
    setTimeout(() => {
      if (btn) {
        btn.disabled = false;
        btn.innerHTML = '<i class="fas fa-unlock-alt"></i> Access';
      }
      if (password === SECURITY_CONFIG.MASTER_PASSWORD) {
        handleLoginSuccess();
      } else {
        handleLoginFailure();
      }
    }, 800);
  }

  function handleLoginSuccess() {
    securityState.failedAttempts = 0;
    securityState.lockoutUntil = 0;
    localStorage.removeItem("sz_attempts");
    localStorage.removeItem("sz_lockout");
    const target = securityState.pendingWindow;
    closePwModal();
    if (target) {
      if (target === "graph-window") openGraphWindow();
      else toggleNewWindow(target);
    }
    showToast("Access granted", "success");
  }

  function handleLoginFailure() {
    securityState.failedAttempts++;
    localStorage.setItem(
      "sz_attempts",
      securityState.failedAttempts.toString(),
    );
    showError('<i class="fas fa-times-circle"></i> Invalid master password');
    updateAttemptsDisplay();
    const inp = document.getElementById("password-input") as HTMLInputElement;
    if (inp) {
      inp.value = "";
      inp.focus();
    }
    if (securityState.failedAttempts >= SECURITY_CONFIG.MAX_ATTEMPTS) {
      activateLockout();
    }
  }

  function showError(msg: string) {
    const el = document.getElementById("error-message");
    if (el) {
      el.innerHTML = msg;
      el.style.display = "block";
    }
  }
  function updateAttemptsDisplay() {
    const el = document.getElementById("attempts-info");
    if (el) {
      el.textContent = `Attempt ${securityState.failedAttempts} of ${SECURITY_CONFIG.MAX_ATTEMPTS}`;
      el.style.display = "block";
    }
  }

  function activateLockout() {
    const until = Date.now() + SECURITY_CONFIG.LOCKOUT_MINUTES * 60000;
    securityState.lockoutUntil = until;
    localStorage.setItem("sz_lockout", until.toString());
    showLockoutScreen();
    startLockoutTimer();
  }

  function startLockoutTimer() {
    const tick = () => {
      const rem = securityState.lockoutUntil - Date.now();
      if (rem <= 0) {
        securityState.failedAttempts = 0;
        securityState.lockoutUntil = 0;
        localStorage.removeItem("sz_lockout");
        localStorage.setItem("sz_attempts", "0");
        const timerEl = document.getElementById("lockout-timer");
        if (timerEl) timerEl.textContent = "00:00";
        showLoginScreen();
        const att = document.getElementById("attempts-info");
        if (att) att.style.display = "none";
        return;
      }
      const m = Math.floor(rem / 60000);
      const s = Math.floor((rem % 60000) / 1000);
      const timerEl = document.getElementById("lockout-timer");
      if (timerEl) {
        timerEl.textContent =
          String(m).padStart(2, "0") + ":" + String(s).padStart(2, "0");
      }
      setTimeout(tick, 500);
    };
    tick();
  }

  /* WINDOW SYSTEM */
  const toggleNewWindow = (windowId: string) => {
    const win = document.getElementById(windowId);
    const overlay = document.getElementById("window-overlay");
    if (!win || !overlay) return;
    const isVisible = win.classList.contains("visible");

    if (isVisible && windowId !== "settings-window") {
      win.classList.remove("visible");
      const settingsWin = document.getElementById("settings-window");
      if (settingsWin && !settingsWin.classList.contains("visible")) {
        settingsWin.classList.add("visible");
        overlay.classList.add("visible");
      } else {
        overlay.classList.add("visible");
      }
    } else if (isVisible && windowId === "settings-window") {
      win.classList.remove("visible");
      const anyVisible = Array.from(
        document.querySelectorAll(".new-window"),
      ).some((w) => w.classList.contains("visible"));
      if (!anyVisible) overlay.classList.remove("visible");
    } else {
      document
        .querySelectorAll(".new-window")
        .forEach((w) => w.classList.remove("visible"));
      win.classList.add("visible");
      overlay.classList.add("visible");
      if (windowId === "school-portal-window") {
        const lastTab = localStorage.getItem("lastActiveTab") || "local";
        setTimeout(() => {
          const chip = document.querySelector(
            `.filter-chip[data-filter="${lastTab === "local-programs-tab" ? "local" : "website"}"]`,
          );
          if (chip) (chip as HTMLElement).click();
        }, 10);
      }
      if (windowId === "testing-prototypes-window")
        setTimeout(() => fileManagerSystem.init(), 100);
      if (windowId === "secure-schedule-window")
        setTimeout(() => updateSecureScheduleButtons(), 100);
      if (windowId === "graph-window") {
        setTimeout(() => {
          const storedPath = localStorage.getItem("ozzy_folder_path");
          const status = document.getElementById("graphStatus");
          if (status) {
            if (storedPath) {
              status.textContent =
                'Saved folder path found. Click "Load Ozzy_Knows Folder" to reload.';
            } else {
              status.textContent =
                "Click the button to select your Ozzy_Knows folder.";
            }
          }
        }, 100);
      }
    }
  };

  const closeAllWindows = () => {
    document
      .querySelectorAll(".new-window, .window-overlay")
      .forEach((el) => el.classList.remove("visible"));
  };

  /* Draggable windows setup (will be attached in useEffect) */
  function setupDraggableWindows() {
    const ids = [
      "settings",
      "graph",
      "schedule",
      "portal",
      "stopwatch",
      "quicklinks",
      "htmllook",
      "filemgr",
    ];
    ids.forEach((id) => {
      const handle = document.getElementById("drag-" + id);
      const panel = document.getElementById(
        id === "quicklinks" ? "empty-window"
        : id === "htmllook" ? "html-look-window"
        : id === "filemgr" ? "testing-prototypes-window"
        : id + "-window",
      );
      if (!handle || !panel) return;
      let dragging = false,
        sx = 0,
        sy = 0;
      const onMouseDown = (e: MouseEvent) => {
        if (e.button !== 0) return;
        dragging = true;
        const r = panel.getBoundingClientRect();
        sx = e.clientX - r.left;
        sy = e.clientY - r.top;
        panel.style.transition = "none";
        e.preventDefault();
      };
      const onMouseMove = (e: MouseEvent) => {
        if (!dragging) return;
        let nx = e.clientX - sx,
          ny = e.clientY - sy;
        nx = Math.max(0, Math.min(window.innerWidth - panel.offsetWidth, nx));
        ny = Math.max(0, Math.min(window.innerHeight - panel.offsetHeight, ny));
        panel.style.top = ny + "px";
        panel.style.left = nx + "px";
        panel.style.transform = "none";
      };
      const onMouseUp = () => {
        dragging = false;
      };
      handle.addEventListener("mousedown", onMouseDown);
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
    });
  }

  /* DYNAMIC D3 GRAPH */
  let graphSimulation: any = null;
  let graphGroup: any = null;
  let graphNodes: any[] = [];
  let graphLinks: any[] = [];
  let graphNodeMap = new Map();

  function openGraphWindow() {
    toggleNewWindow("graph-window");
  }

  async function buildGraphFromFiles(files: FileList | File[]) {
    const nodesMap = new Map();
    const linksSet = new Set();
    const fileContents = new Map();
    const rootName = "Ozzy_Knows";

    function addNode(
      id: string,
      name: string,
      type: string,
      parentId: string | null = null,
    ) {
      if (!nodesMap.has(id)) {
        nodesMap.set(id, { id, name, type, parentId });
      } else {
        const existing = nodesMap.get(id);
        if (!existing.parentId && parentId) existing.parentId = parentId;
      }
      return nodesMap.get(id);
    }
    function addLink(src: string, tgt: string) {
      const key = `${src}->${tgt}`;
      if (!linksSet.has(key)) {
        linksSet.add(key);
      }
    }

    for (const file of files) {
      const relPath = (file as any).webkitRelativePath;
      const parts = relPath.split("/");
      let currentPath = "";
      let lastParent = null;
      for (let i = 0; i < parts.length - 1; i++) {
        const part = parts[i];
        if (i === 0) currentPath = part;
        else currentPath = currentPath + "/" + part;
        const folderId = currentPath;
        addNode(folderId, part, "folder", lastParent);
        if (lastParent) addLink(lastParent, folderId);
        lastParent = folderId;
      }
      const fileName = parts[parts.length - 1];
      const fileId = relPath;
      let fileType = "file";
      if (fileName.endsWith(".html") || fileName.endsWith(".htm"))
        fileType = "html";
      else if (fileName.endsWith(".md") || fileName.endsWith(".txt"))
        fileType = "text";
      else continue;
      addNode(fileId, fileName, fileType, lastParent);
      if (lastParent) addLink(lastParent, fileId);
      if (fileType === "html") {
        const content = await readFileContent(file);
        fileContents.set(fileId, content);
      }
    }

    for (const [fileId, content] of fileContents.entries()) {
      const linkRegex = /href=["']([^"']+)["']/g;
      let match;
      while ((match = linkRegex.exec(content)) !== null) {
        let href = match[1];
        const fileDir = fileId.substring(0, fileId.lastIndexOf("/"));
        let targetId;
        if (href.startsWith("/")) {
          targetId = rootName + href;
        } else if (href.startsWith("./")) {
          href = href.substring(2);
          targetId = fileDir ? fileDir + "/" + href : href;
        } else if (href.startsWith("../")) {
          let up = 0;
          while (href.startsWith("../")) {
            up++;
            href = href.substring(3);
          }
          let dirParts = fileDir.split("/");
          dirParts = dirParts.slice(0, dirParts.length - up);
          targetId = (dirParts.length ? dirParts.join("/") + "/" : "") + href;
        } else {
          targetId = fileDir ? fileDir + "/" + href : href;
        }
        if (!targetId.startsWith(rootName))
          targetId = rootName + "/" + targetId;
        targetId = targetId.replace(/\/+/g, "/");
        if (nodesMap.has(targetId)) {
          addLink(fileId, targetId);
        }
      }
    }

    const nodes = Array.from(nodesMap.values());
    const links = Array.from(linksSet).map((key) => {
      const [src, tgt] = (key as string).split("->");
      return { source: src, target: tgt };
    });
    const ozzyNode = nodes.find(
      (n: any) => n.name.toLowerCase() === "ozzy_knows.html",
    );
    return { nodes, links, centerNodeId: ozzyNode ? ozzyNode.id : null };
  }

  function readFileContent(file: File) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => resolve(e.target?.result);
      reader.onerror = reject;
      reader.readAsText(file);
    });
  }

  function renderGraph(data: any) {
    const container = document.getElementById("d3-container");
    if (!container) return;
    container.innerHTML = "";
    const { nodes, links, centerNodeId } = data;
    if (nodes.length === 0) {
      container.innerHTML =
        '<div style="display:flex;justify-content:center;align-items:center;height:100%;color:#94a3b8;">No valid files found in selected folder.</div>';
      return;
    }

    const W = container.clientWidth || 860,
      H = 500;

    const d3 = (window as any).d3;
    if (!d3) {
      container.innerHTML =
        '<div style="color:red">D3 library not loaded. Add CDN to index.html.</div>';
      return;
    }

    const svg = d3
      .select(container)
      .append("svg")
      .attr("width", W)
      .attr("height", H)
      .style("display", "block")
      .style("background", "#0d0d17")
      .call(
        d3
          .zoom()
          .scaleExtent([0.1, 8])
          .on("zoom", (e: any) => {
            if (graphGroup) graphGroup.attr("transform", e.transform);
          }),
      );

    const g = svg.append("g");
    graphGroup = g;

    const color = (d: any) => {
      if (d.type === "folder") return "#f39c12";
      if (d.type === "html") return "#3498db";
      if (d.type === "text") return "#2ecc71";
      return "#95a5a6";
    };

    const linkGroup = g
      .append("g")
      .attr("class", "g-links")
      .selectAll("line")
      .data(links)
      .enter()
      .append("line")
      .attr("stroke", "#565f89")
      .attr("stroke-width", 1.5)
      .attr("stroke-opacity", 0.4);

    const nodeGroup = g
      .append("g")
      .attr("class", "g-nodes")
      .selectAll("circle")
      .data(nodes)
      .enter()
      .append("circle")
      .attr("r", (d: any) =>
        d.type === "folder" ? 10
        : d.type === "html" ? 8
        : 6,
      )
      .attr("fill", (d: any) => color(d))
      .attr("stroke", "#0d0d17")
      .attr("stroke-width", 2)
      .style("cursor", "grab")
      .style("filter", (d: any) => `drop-shadow(0 0 4px ${color(d)}88)`)
      .attr("data-id", (d: any) => d.id)
      .call(
        d3
          .drag()
          .on("start", (ev: any, d: any) => {
            if (!graphSimulation) return;
            if (!ev.active) graphSimulation.alphaTarget(0.3).restart();
            d.fx = d.x;
            d.fy = d.y;
          })
          .on("drag", (ev: any, d: any) => {
            d.fx = ev.x;
            d.fy = ev.y;
          })
          .on("end", (ev: any, d: any) => {
            if (!graphSimulation) return;
            if (!ev.active) graphSimulation.alphaTarget(0);
            d.fx = null;
            d.fy = null;
          }),
      );

    const labelGroup = g
      .append("g")
      .attr("class", "g-labels")
      .selectAll("text")
      .data(nodes)
      .enter()
      .append("text")
      .attr("font-size", "10px")
      .attr("fill", "#bcbcda")
      .attr("paint-order", "stroke")
      .attr("stroke", "#1a1a2a")
      .attr("stroke-width", "2px")
      .attr("dx", 14)
      .attr("dy", 4)
      .style("pointer-events", "none")
      .style("user-select", "none")
      .attr("data-id", (d: any) => d.id)
      .text((d: any) => d.name);

    const sim = d3
      .forceSimulation(nodes)
      .force(
        "link",
        d3
          .forceLink(links)
          .id((d: any) => d.id)
          .distance((d: any) => {
            const source = nodes.find((n: any) => n.id === d.source.id);
            const target = nodes.find((n: any) => n.id === d.target.id);
            if (source.type === "folder" && target.type !== "folder") return 80;
            if (source.type !== "folder" && target.type === "folder") return 80;
            return 120;
          })
          .strength(0.5),
      )
      .force(
        "charge",
        d3
          .forceManyBody()
          .strength((d: any) => (d.type === "folder" ? -200 : -100)),
      )
      .force("center", d3.forceCenter(W / 2, H / 2))
      .force(
        "collide",
        d3
          .forceCollide()
          .radius((d: any) => (d.type === "folder" ? 25 : 15))
          .strength(0.5),
      )
      .force(
        "radial",
        d3
          .forceRadial(200, W / 2, H / 2)
          .strength((d: any) => (d.id === centerNodeId ? 1 : 0.2)),
      );

    if (centerNodeId) {
      const centerNode = nodes.find((n: any) => n.id === centerNodeId);
      if (centerNode) {
        centerNode.fx = W / 2;
        centerNode.fy = H / 2;
      }
    }

    sim.on("tick", () => {
      linkGroup
        .attr("x1", (d: any) => d.source.x)
        .attr("y1", (d: any) => d.source.y)
        .attr("x2", (d: any) => d.target.x)
        .attr("y2", (d: any) => d.target.y);
      nodeGroup.attr("cx", (d: any) => d.x).attr("cy", (d: any) => d.y);
      labelGroup.attr("x", (d: any) => d.x).attr("y", (d: any) => d.y);
    });

    nodeGroup
      .on("mouseenter", function (event: any, d: any) {
        linkGroup.classed(
          "hl",
          (l: any) => l.source.id === d.id || l.target.id === d.id,
        );
        labelGroup.classed("hl", (n: any) => n.id === d.id);
        d3.select(this).attr(
          "r",
          d.type === "folder" ? 13
          : d.type === "html" ? 11
          : 9,
        );
      })
      .on("mouseleave", function (event: any, d: any) {
        linkGroup.classed("hl", false);
        labelGroup.classed("hl", false);
        d3.select(this).attr(
          "r",
          d.type === "folder" ? 10
          : d.type === "html" ? 8
          : 6,
        );
      });

    linkGroup
      .on("mouseenter", function (event: any, l: any) {
        d3.select(this).classed("hl", true);
        nodeGroup.classed(
          "hl",
          (n: any) => n.id === l.source.id || n.id === l.target.id,
        );
        labelGroup.classed(
          "hl",
          (n: any) => n.id === l.source.id || n.id === l.target.id,
        );
      })
      .on("mouseleave", () => {
        linkGroup.classed("hl", false);
        nodeGroup.classed("hl", false);
        labelGroup.classed("hl", false);
      });

    graphSimulation = sim;
    graphNodes = nodes;
    graphLinks = links;
    graphNodeMap.clear();
    nodes.forEach((n: any) => graphNodeMap.set(n.id, n));

    sim.alpha(1).restart();
  }

  /* SCHEDULE SYSTEM */
  const SECURE_SCHEDULES = {
    workday: {
      name: "Workday Schedule",
      period1: {
        segments: [
          { activity: "Rest", start: "1:30", end: "6:00" },
          { activity: "Work", start: "6:00", end: "13:30" },
        ],
      },
      period2: {
        segments: [
          { activity: "Work", start: "13:30", end: "17:00" },
          { activity: "Rest", start: "17:00", end: "17:45" },
          { activity: "Work", start: "17:45", end: "19:50" },
          { activity: "Rest", start: "19:50", end: "20:35" },
          { activity: "Work", start: "20:35", end: "22:40" },
          { activity: "Rest", start: "22:40", end: "23:25" },
          { activity: "Work", start: "23:25", end: "1:30" },
        ],
      },
    },
    restday: {
      name: "Restday Schedule",
      period1: {
        segments: [
          { activity: "Rest", start: "1:30", end: "6:00" },
          { activity: "Work", start: "6:00", end: "8:30" },
          { activity: "Rest", start: "8:30", end: "9:25" },
          { activity: "Work", start: "9:25", end: "11:55" },
          { activity: "Rest", start: "11:55", end: "12:50" },
          { activity: "Work", start: "12:50", end: "13:30" },
        ],
      },
      period2: {
        segments: [
          { activity: "Work", start: "13:30", end: "15:20" },
          { activity: "Rest", start: "15:20", end: "16:15" },
          { activity: "Work", start: "16:15", end: "18:45" },
          { activity: "Rest", start: "18:45", end: "19:40" },
          { activity: "Gaming", start: "19:40", end: "23:00" },
          { activity: "Work", start: "23:00", end: "1:30" },
        ],
      },
    },
  };
  let secureCurrentSchedule = "workday";
  let isSecureMuted = false;
  let secureCurrentSegmentIndex = -1;
  let secureAlertTimeout: any = null;
  let secureCountdownInterval: any = null;

  function timeToMinutes(t: string) {
    const [h, m] = t.split(":").map(Number);
    return h * 60 + m;
  }

  function loadSecureSchedulePreferences() {
    try {
      const p = JSON.parse(localStorage.getItem("sz_sched") || "{}");
      if (p.schedule) secureCurrentSchedule = p.schedule;
      if (p.muted !== undefined) isSecureMuted = p.muted;
      updateSecureScheduleButtons();
      updateSecureMuteToggle();
    } catch (e) {}
  }
  function saveSecureSchedulePreferences() {
    localStorage.setItem(
      "sz_sched",
      JSON.stringify({
        schedule: secureCurrentSchedule,
        muted: isSecureMuted,
      }),
    );
  }

  function checkSecureCurrentStage() {
    const now = new Date();
    const curMin = now.getHours() * 60 + now.getMinutes();
    const sched =
      SECURE_SCHEDULES[secureCurrentSchedule as keyof typeof SECURE_SCHEDULES];
    const allSegs = [...sched.period1.segments, ...sched.period2.segments];
    let curSeg: any = null,
      nextSeg: any = null;

    for (let i = 0; i < allSegs.length; i++) {
      const s = timeToMinutes(allSegs[i].start),
        e = timeToMinutes(allSegs[i].end);
      const inRange =
        e > s ? curMin >= s && curMin < e : curMin >= s || curMin < e;
      if (inRange) {
        curSeg = { ...allSegs[i], index: i };
        nextSeg = allSegs[(i + 1) % allSegs.length];
        break;
      }
    }
    if (curSeg) {
      const actEl = document.getElementById("secureCurrentActivity");
      if (actEl)
        actEl.textContent = `${curSeg.activity} (${curSeg.start}-${curSeg.end})`;
      if (curSeg.index !== secureCurrentSegmentIndex) {
        secureCurrentSegmentIndex = curSeg.index;
        showStageAlert(curSeg);
        showStageNotification(curSeg);
      }
      if (nextSeg) {
        const nm = timeToMinutes(nextSeg.start);
        let diff = nm > curMin ? nm - curMin : 1440 - curMin + nm;
        const h = Math.floor(diff / 60),
          m = diff % 60;
        const el = document.getElementById("nextStageTime");
        if (el) el.textContent = (h > 0 ? h + "h " : "") + m + "m";
      }
    }
  }

  function switchSecureSchedule(type: string) {
    if (secureCurrentSchedule !== type) {
      secureCurrentSchedule = type;
      secureCurrentSegmentIndex = -1;
      updateSecureScheduleButtons();
      const el = document.getElementById("secureScheduleName");
      if (el)
        el.textContent =
          SECURE_SCHEDULES[type as keyof typeof SECURE_SCHEDULES].name +
          " Active";
      saveSecureSchedulePreferences();
    }
  }
  function updateSecureScheduleButtons() {
    const wd = document.getElementById("secureWorkdayBtn");
    const rd = document.getElementById("secureRestdayBtn");
    if (wd) wd.classList.toggle("active", secureCurrentSchedule === "workday");
    if (rd) rd.classList.toggle("active", secureCurrentSchedule === "restday");
  }

  function showStageAlert(seg: any) {
    clearSecureAlertTimers();
    const activityEl = document.getElementById("alertActivity");
    if (activityEl) {
      activityEl.textContent = seg.activity.toUpperCase();
      activityEl.className = "alert-activity " + seg.activity.toLowerCase();
    }
    const intervalEl = document.getElementById("alertInterval");
    if (intervalEl) intervalEl.textContent = `${seg.start} - ${seg.end}`;
    const contentEl = document.getElementById("alertContent");
    if (contentEl)
      contentEl.className = `alert-content alert-${seg.activity.toLowerCase()}`;
    let cd = 5;
    const cdEl = document.getElementById("countdownTimer");
    if (cdEl) cdEl.textContent = cd.toString();
    const alertEl = document.getElementById("stageAlert");
    if (alertEl) alertEl.classList.add("active");
    if (!isSecureMuted) playAlertSound();
    secureCountdownInterval = setInterval(() => {
      cd--;
      if (cdEl) cdEl.textContent = cd.toString();
      if (cd <= 0) closeStageAlert();
    }, 1000);
    secureAlertTimeout = setTimeout(closeStageAlert, 5500);
  }
  function closeStageAlert() {
    const alertEl = document.getElementById("stageAlert");
    if (alertEl) alertEl.classList.remove("active");
    clearSecureAlertTimers();
  }
  function clearSecureAlertTimers() {
    if (secureAlertTimeout) {
      clearTimeout(secureAlertTimeout);
      secureAlertTimeout = null;
    }
    if (secureCountdownInterval) {
      clearInterval(secureCountdownInterval);
      secureCountdownInterval = null;
    }
  }
  function showStageNotification(seg: any) {
    const icons: any = { Rest: "😴", Work: "💼", Gaming: "🎮" };
    const actEl = document.getElementById("notificationActivity");
    if (actEl) actEl.textContent = seg.activity + " Stage";
    const intEl = document.getElementById("notificationInterval");
    if (intEl) intEl.textContent = `${seg.start} - ${seg.end}`;
    const iconEl = document.getElementById("notificationIcon");
    if (iconEl) iconEl.textContent = icons[seg.activity] || "⏰";
    const notif = document.getElementById("stageNotification");
    if (notif) {
      notif.className = `stage-notification active notification-${seg.activity.toLowerCase()}`;
      setTimeout(() => notif.classList.remove("active"), 3000);
    }
  }
  function toggleSecureMute() {
    isSecureMuted = !isSecureMuted;
    const mute = document.getElementById("muteToggle");
    if (mute) mute.classList.toggle("muted", isSecureMuted);
    const icon = document.getElementById("muteIcon");
    if (icon) icon.textContent = isSecureMuted ? "🔕" : "🔔";
    saveSecureSchedulePreferences();
  }
  function updateSecureMuteToggle() {
    const mute = document.getElementById("muteToggle");
    if (mute) mute.classList.toggle("muted", isSecureMuted);
    const icon = document.getElementById("muteIcon");
    if (icon) icon.textContent = isSecureMuted ? "🔕" : "🔔";
  }
  function playAlertSound() {
    try {
      const ctx = new (
        window.AudioContext || (window as any).webkitAudioContext
      )();
      const osc = ctx.createOscillator(),
        gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.frequency.value = 800;
      osc.type = "sine";
      gain.gain.setValueAtTime(0.3, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.5);
      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.5);
    } catch (e) {}
  }

  /* QUOTES */
  const textItems = [
    "Everybody lies",
    "It always seems impossible until it is done.",
    "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
    "Either you run the day or the day runs you.",
    "Education is the most powerful weapon which you can use to change the world.",
    "The only way to do great work is to love what you do.",
    "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "Strive not to be a success, but rather to be of value.",
    "The only limit to our realization of tomorrow is our doubts of today.",
    "Life is what happens when you're busy making other plans.",
    "The journey of a thousand miles begins with one step.",
    "What you get by achieving your goals is not as important as what you become by achieving your goals.",
    "Believe you can and you're halfway there.",
    "It does not matter how slowly you go as long as you do not stop.",
    "You are never too old to set another goal or to dream a new dream.",
    "The secret of getting ahead is getting started.",
    "Your time is limited, don't waste it living someone else's life.",
    "If you can dream it, you can do it.",
    "The only way to achieve the impossible is to believe it is possible.",
  ];
  let currentQuoteIndex = 0;
  const rotateQuotes = () => {
    const q1 = document.getElementById("quotes-item-1");
    const q2 = document.getElementById("quotes-item-2");
    if (q1) q1.textContent = textItems[currentQuoteIndex];
    if (q2)
      q2.textContent = textItems[(currentQuoteIndex + 1) % textItems.length];
    currentQuoteIndex = (currentQuoteIndex + 1) % textItems.length;
  };

  /* COUNTDOWN TIMER */
  const countDownDate = new Date("Jun 13, 2026 00:00:00").getTime();
  function updateCountdown() {
    const dist = countDownDate - Date.now();
    const el = document.getElementById("demo");
    if (!el) return;
    if (dist < 0) {
      el.innerHTML = "EXPIRED";
      return;
    }
    const d = Math.floor(dist / 86400000),
      h = Math.floor((dist % 86400000) / 3600000),
      m = Math.floor((dist % 3600000) / 60000),
      s = Math.floor((dist % 60000) / 1000);
    el.innerHTML = `<i class="fas fa-hourglass-half"></i> ${d}d ${h}h ${m}m ${s}s`;
  }

  /* STOPWATCH */
  let [swSec, swMin, swHrs] = [0, 0, 0];
  let swTimer: any = null;
  let laps: any[] = [];
  let lapCount = 0;
  const updateTimerDisplay = () => {
    const el = document.getElementById("Timer_1");
    if (el)
      el.textContent = `${String(swHrs).padStart(2, "0")}:${String(swMin).padStart(2, "0")}:${String(swSec).padStart(2, "0")}`;
    const bar = document.getElementById("stopwatchProgress");
    if (bar)
      bar.style.width =
        (((swHrs * 3600 + swMin * 60 + swSec) % 60) / 60) * 100 + "%";
  };
  const swTick = () => {
    swSec++;
    if (swSec === 60) {
      swSec = 0;
      swMin++;
      if (swMin === 60) {
        swMin = 0;
        swHrs++;
      }
    }
    updateTimerDisplay();
  };
  const watchStart = () => {
    if (!swTimer) {
      swTimer = setInterval(swTick, 1000);
      showToast("Stopwatch started", "success");
    }
  };
  const watchStop = () => {
    clearInterval(swTimer);
    swTimer = null;
    showToast("Stopwatch stopped", "info");
  };
  const watchReset = () => {
    watchStop();
    swSec = swMin = swHrs = 0;
    laps = [];
    lapCount = 0;
    updateTimerDisplay();
    updateLapDisplay();
  };
  const confirmReset = () => {
    if (swTimer || laps.length) {
      if (confirm("Reset the stopwatch? This will clear all lap times."))
        watchReset();
    } else watchReset();
  };
  const addLap = () => {
    if (!swTimer) return;
    lapCount++;
    const t = `${String(swHrs).padStart(2, "0")}:${String(swMin).padStart(2, "0")}:${String(swSec).padStart(2, "0")}`;
    laps.push({ number: lapCount, time: t });
    updateLapDisplay();
    showToast(`Lap ${lapCount}: ${t}`, "info");
  };
  const updateLapDisplay = () => {
    const c = document.getElementById("lapTimes");
    if (!c) return;
    c.innerHTML = "<h4>Lap Times:</h4>";
    if (!laps.length) {
      c.innerHTML +=
        '<div style="text-align:center;color:#999;padding:10px">No lap times recorded</div>';
      return;
    }
    laps.forEach((lap) => {
      const d = document.createElement("div");
      d.style.cssText = "padding:5px;border-bottom:1px solid #eee";
      d.innerHTML = `<strong>Lap ${lap.number}:</strong> ${lap.time}`;
      c.appendChild(d);
    });
  };

  /* SCHOOL PORTAL */
  const localApps = [
    {
      name: "Python",
      protocol: "python://open",
      icon: "fab fa-python",
      description: "Python programming environment",
      badge: "Local App",
    },
    {
      name: "Prezentacije (POWERSHELL)",
      protocol: "powershell",
      icon: "fas fa-terminal",
      description: "Run development server for presentations",
      badge: "Local Script",
      specialClass: "powershell-card",
    },
    {
      name: "Obsidian",
      protocol: "obsidian://open",
      icon: "fas fa-brain",
      description: "Knowledge base (second brain)",
      badge: "Local App",
    },
    {
      name: "Anki",
      protocol: "anki://open",
      icon: "fas fa-layer-group",
      description: "Flashcard learning",
      badge: "Local App",
    },
  ];
  const websites = [
    {
      name: "Mehaničko Inženjerstvo",
      url: "https://books.google.hr/books?id=SoL9ZpRnLrgC&printsec=frontcover&hl=hr",
      icon: "fas fa-book",
      description: "Mechanical engineering textbook",
      badge: "Website",
    },
    {
      name: "Minecraft Redeem",
      url: "https://www.techfornerd.com/minecraft-redeem-codes/",
      icon: "fas fa-gamepad",
      description: "Minecraft redeem codes",
      badge: "Website",
    },
    {
      name: "Kućni Internet",
      url: "http://192.168.5.1/",
      icon: "fas fa-wifi",
      description: "Home internet router",
      badge: "Local Network",
    },
    {
      name: "IZZI",
      url: "https://hr.izzi.digital/#/",
      icon: "fas fa-tv",
      description: "IZZI digital platform",
      badge: "Website",
    },
    {
      name: "Loomen",
      url: "https://loomen.carnet.hr/",
      icon: "fas fa-chalkboard-teacher",
      description: "Educational platform",
      badge: "Website",
    },
    {
      name: "Elektronički udžbenici",
      url: "https://digitalni.element.hr/",
      icon: "fas fa-laptop",
      description: "Digital textbooks",
      badge: "Website",
    },
    {
      name: "Learn German",
      url: "https://learngerman.dw.com/en/learn-german/s-9528",
      icon: "fas fa-language",
      description: "German language learning",
      badge: "Website",
    },
    {
      name: "Github",
      url: "https://github.com/",
      icon: "fab fa-github",
      description: "Code repository",
      badge: "Website",
    },
    {
      name: "Stack Overflow",
      url: "https://stackoverflow.co/",
      icon: "fab fa-stack-overflow",
      description: "Developer community",
      badge: "Website",
    },
    {
      name: "GamDie",
      url: "https://apunkagames.cfd/gamdie/",
      icon: "fas fa-dice",
      description: "Gaming website",
      badge: "Website",
    },
    {
      name: "Youtube Music",
      url: "https://music.youtube.com/",
      icon: "fab fa-youtube",
      description: "Music streaming",
      badge: "Website",
    },
    {
      name: "Perplexity AI",
      url: "https://www.perplexity.ai/",
      icon: "fas fa-robot",
      description: "AI search assistant",
      badge: "Website",
    },
    {
      name: "OnlineConverter",
      url: "https://theonlineconverter.com/",
      icon: "fas fa-exchange-alt",
      description: "File format converter",
      badge: "Website",
    },
    {
      name: "Internet Archive",
      url: "https://archive.org/details/image",
      icon: "fas fa-archive",
      description: "Digital library",
      badge: "Website",
    },
    {
      name: "Šah",
      url: "https://www.chess.com/",
      icon: "fas fa-chess",
      description: "Chess games",
      badge: "Website",
    },
    {
      name: "Pathology Archive",
      url: "https://meridian.allenpress.com/aplm",
      icon: "fas fa-microscope",
      description: "Pathology resources",
      badge: "Website",
    },
    {
      name: "Srednja.hr Kvizovi",
      url: "https://kvizovi.srednja.hr/",
      icon: "fas fa-question-circle",
      description: "Educational quizzes",
      badge: "Website",
    },
    {
      name: "Google Translate",
      url: "https://translate.google.com/?sl=auto&tl=en&op=translate",
      icon: "fas fa-language",
      description: "Language translation",
      badge: "Website",
    },
    {
      name: "MorseChat",
      url: "https://morse.halb.it/?channel=training",
      icon: "fas fa-comment",
      description: "Morse code training",
      badge: "Website",
    },
    {
      name: "Google Drive",
      url: "https://workspace.google.com/products/drive/",
      icon: "fab fa-google-drive",
      description: "Cloud storage",
      badge: "Website",
    },
    {
      name: "Songsterr",
      url: "https://www.songsterr.com/",
      icon: "fas fa-guitar",
      description: "Guitar tabs",
      badge: "Website",
    },
    {
      name: "Muziker",
      url: "https://www.muziker.hr/",
      icon: "fas fa-music",
      description: "Music instruments store",
      badge: "Website",
    },
    {
      name: "Eat this much",
      url: "https://www.eatthismuch.com/",
      icon: "fas fa-utensils",
      description: "Meal planning",
      badge: "Website",
    },
    {
      name: "Cronometer",
      url: "https://cronometer.com/",
      icon: "fas fa-apple-alt",
      description: "Nutrition tracking",
      badge: "Website",
    },
    {
      name: "Organizacija",
      url: "https://clickup.com/",
      icon: "fas fa-tasks",
      description: "Task management",
      badge: "Website",
    },
    {
      name: "Kognitivnost",
      url: "https://www.wolframalpha.com/",
      icon: "fas fa-brain",
      description: "Computational intelligence",
      badge: "Website",
    },
    {
      name: "Biologija Google Drive",
      url: "https://drive.google.com/drive/folders/13McGA8CtjM-Momg2Z84q8cD0dHn5YfAz",
      icon: "fas fa-dna",
      description: "Biology resources",
      badge: "Google Drive",
    },
    {
      name: "Fizika pripreme",
      url: "https://drive.google.com/drive/folders/13u7_d_-rlDyTqMhCr8EPWOgCVotsPhZe",
      icon: "fas fa-atom",
      description: "Physics preparation materials",
      badge: "Google Drive",
    },
  ];

  const createAppCard = (app: any) => {
    const card = document.createElement("a");
    card.className = `portal-card ${app.specialClass || ""}`;
    card.href = "#";
    card.setAttribute("title", app.description);
    card.onclick = function (e) {
      e.preventDefault();
      if (app.protocol === "powershell")
        alert(
          "To run your presentation server:\n1. Open PowerShell\n2. Navigate to your project directory\n3. Run: npm run dev",
        );
      else {
        window.location.href = app.protocol;
        setTimeout(() => {
          if (
            confirm(
              `If ${app.name} didn't open, make sure it's installed.\nOpen shortcuts folder?`,
            )
          )
            window.open(
              "file:///C:/Users/CrozzyBoii/Documents/Shortcuts/School",
            );
        }, 1000);
      }
    };
    card.innerHTML = `<i class="${app.icon}"></i><div class="portal-info"><div class="portal-name">${app.name}</div><div class="portal-desc">${app.description}</div><span class="local-badge">${app.badge}</span></div>`;
    return card;
  };
  const createWebsiteCard = (site: any) => {
    const card = document.createElement("a");
    card.className = "portal-card";
    card.href = site.url;
    card.target = "_blank";
    card.setAttribute("title", site.description);
    card.innerHTML = `<i class="${site.icon}"></i><div class="portal-info"><div class="portal-name">${site.name}</div><div class="portal-desc">${site.description}</div><span class="web-badge">${site.badge}</span></div>`;
    return card;
  };

  function addNewPortalItem() {
    const type = prompt("Enter type (local or website):");
    if (!type || !["local", "website"].includes(type)) {
      alert("Please enter 'local' or 'website'");
      return;
    }
    const name = prompt("Enter name:");
    if (!name) return;
    const description = prompt("Enter description:");
    const icon =
      prompt("Enter icon class (e.g., fas fa-book):") || "fas fa-question";
    if (type === "local") {
      const protocol = prompt("Enter protocol or 'powershell':");
      if (!protocol) return;
      const app: any = {
        name,
        protocol,
        icon,
        description: description || "Custom local application",
        badge: "Local App",
      };
      if (protocol === "powershell") {
        app.specialClass = "powershell-card";
        app.badge = "Local Script";
      }
      localApps.push(app);
      const container = document.getElementById("localProgramsContainer");
      if (container) container.appendChild(createAppCard(app));
      showToast("Added: " + name, "success");
    } else {
      let url = prompt("Enter website URL:");
      if (!url) return;
      if (!url.startsWith("http")) url = "https://" + url;
      const site = {
        name,
        url,
        icon,
        description: description || "Custom website",
        badge: "Website",
      };
      websites.push(site);
      const container = document.getElementById("websitesContainer");
      if (container) container.appendChild(createWebsiteCard(site));
      showToast("Added: " + name, "success");
    }
  }

  function filterPortal(type: string) {
    document
      .querySelectorAll(".filter-chip")
      .forEach((c) => c.classList.remove("active"));
    const chip = document.querySelector(`.filter-chip[data-filter="${type}"]`);
    if (chip) chip.classList.add("active");
    const local = document.getElementById("local-programs-tab");
    const web = document.getElementById("websites-tab");
    if (type === "local") {
      if (local) local.classList.add("active");
      if (web) web.classList.remove("active");
      localStorage.setItem("lastActiveTab", "local-programs-tab");
    } else {
      if (local) local.classList.remove("active");
      if (web) web.classList.add("active");
      localStorage.setItem("lastActiveTab", "websites-tab");
    }
  }

  function searchPortal() {
    const q =
      (
        document.getElementById("portalSearch") as HTMLInputElement
      )?.value?.toLowerCase() || "";
    document.querySelectorAll(".portal-card").forEach((card) => {
      const name =
        card.querySelector(".portal-name")?.textContent?.toLowerCase() || "";
      const desc =
        card.querySelector(".portal-desc")?.textContent?.toLowerCase() || "";
      (card as HTMLElement).style.display =
        name.includes(q) || desc.includes(q) ? "flex" : "none";
    });
  }

  /* Context menu */
  let contextMenu: HTMLDivElement | null = null;
  function setupContextMenu() {
    document.addEventListener("contextmenu", (e) => {
      const target = e.target as Element;
      if (target.closest(".portal-card")) {
        e.preventDefault();
        if (contextMenu) contextMenu.remove();
        const card = target.closest(".portal-card") as HTMLAnchorElement;
        contextMenu = document.createElement("div");
        contextMenu.className = "context-menu";
        contextMenu.style.left = e.pageX + "px";
        contextMenu.style.top = e.pageY + "px";
        const href = card.href || "#";
        contextMenu.innerHTML = `<div class="context-menu-item" onclick="window.open('${href}','_blank')"><i class="fas fa-external-link-alt"></i> Open in New Tab</div><div class="context-menu-item" onclick="copyToClipboard('${href}')"><i class="fas fa-copy"></i> Copy Link</div>`;
        document.body.appendChild(contextMenu);
      }
    });
    document.addEventListener("click", () => {
      if (contextMenu) {
        contextMenu.remove();
        contextMenu = null;
      }
    });
  }
  function copyToClipboard(text: string) {
    navigator.clipboard
      .writeText(text)
      .then(() => showToast("Link copied!", "success"));
    if (contextMenu) contextMenu.remove();
  }

  /* TOAST */
  function showToast(msg: string, type: string = "info") {
    const c = document.getElementById("toastContainer");
    if (!c) return;
    const t = document.createElement("div");
    t.className = "toast";
    t.innerHTML = `<i class="fas fa-${
      type === "success" ? "check-circle"
      : type === "error" ? "exclamation-circle"
      : "info-circle"
    }"></i> ${msg}`;
    c.appendChild(t);
    setTimeout(() => t.classList.add("show"), 10);
    setTimeout(() => {
      t.classList.remove("show");
      setTimeout(() => t.remove(), 300);
    }, 3000);
  }

  function copyAllLinks() {
    const links = Array.from(
      document.querySelectorAll("#empty-window a.button-33"),
    )
      .map((a) => (a as HTMLAnchorElement).href)
      .filter(Boolean)
      .join("\n");
    navigator.clipboard
      .writeText(links)
      .then(() => showToast("All links copied!", "success"))
      .catch(() => showToast("Failed to copy", "error"));
  }

  /* FILE MANAGER SYSTEM */
  const fileManagerSystem = {
    state: {
      loadedFiles: [] as any[],
      selectedFile: null as File | null,
      currentMode: "file",
      currentSearch: "",
      selectedFileIds: new Set(),
    },
    init() {
      this.loadSavedFiles();
      this.setupDragAndDrop();
      this.updateFileList();
      this.updateFileCount();
    },
    switchMode(mode: string) {
      this.state.currentMode = mode;
      document
        .querySelectorAll("#fileManagerContainer .mode-btn")
        .forEach((b) => b.classList.remove("active"));
      const btns = document.querySelectorAll("#fileManagerContainer .mode-btn");
      if (btns[0] && mode === "file") btns[0].classList.add("active");
      if (btns[1] && mode === "url") btns[1].classList.add("active");
      const fm = document.getElementById("fileMode");
      if (fm) fm.style.display = mode === "file" ? "block" : "none";
      const um = document.getElementById("urlMode");
      if (um) um.style.display = mode === "url" ? "block" : "none";
      if (mode === "url") this.clearSelectedFile();
      else {
        const u = document.getElementById("webUrlInput") as HTMLInputElement;
        if (u) u.value = "";
      }
    },
    handleFileSelect(ev: Event) {
      const input = ev.target as HTMLInputElement;
      const f = input.files?.[0];
      if (!f) return;
      if (!/\.(html|htm)$/i.test(f.name)) {
        alert("Please select an HTML file");
        return;
      }
      this.state.selectedFile = f;
      const nameEl = document.getElementById("selectedFileName");
      if (nameEl) nameEl.textContent = f.name;
      const info = document.getElementById("selectedFileInfo");
      if (info) info.style.display = "flex";
    },
    clearSelectedFile() {
      this.state.selectedFile = null;
      const input = document.getElementById(
        "htmlFileInput",
      ) as HTMLInputElement;
      if (input) input.value = "";
      const info = document.getElementById("selectedFileInfo");
      if (info) info.style.display = "none";
    },
    loadSelectedFile() {
      if (!this.state.selectedFile) {
        alert("Please select an HTML file first");
        return;
      }
      if (
        this.state.loadedFiles.find(
          (f: any) => f.name === this.state.selectedFile!.name,
        ) &&
        !confirm(
          `"${this.state.selectedFile!.name}" already exists. Add again?`,
        )
      )
        return;
      const url = URL.createObjectURL(this.state.selectedFile);
      this.state.loadedFiles.unshift({
        id: Date.now().toString(),
        name: this.state.selectedFile.name,
        url,
        type: "html",
        isSelected: false,
      });
      this.saveFiles();
      this.clearSelectedFile();
      this.updateFileList();
      this.updateFileCount();
      const list = document.getElementById("filesList");
      if (list) list.scrollTop = 0;
    },
    loadWebURL() {
      const inp = document.getElementById("webUrlInput") as HTMLInputElement;
      if (!inp) return;
      let url = inp.value.trim();
      if (!url) {
        alert("Please enter a URL");
        return;
      }
      if (!url.startsWith("http")) url = "https://" + url;
      try {
        new URL(url);
      } catch (e) {
        alert("Invalid URL");
        return;
      }
      const u = new URL(url);
      let name = u.hostname;
      if (u.pathname !== "/" && u.pathname.length > 1) name += u.pathname;
      if (
        this.state.loadedFiles.find((f: any) => f.url === url) &&
        !confirm(`"${name}" already exists. Add again?`)
      )
        return;
      this.state.loadedFiles.unshift({
        id: Date.now().toString(),
        name,
        url,
        type: "web",
        isSelected: false,
      });
      this.saveFiles();
      inp.value = "";
      this.updateFileList();
      this.updateFileCount();
    },
    loadSavedFiles() {
      try {
        this.state.loadedFiles = JSON.parse(
          localStorage.getItem("fm_files") || "[]",
        );
      } catch (e) {
        this.state.loadedFiles = [];
      }
    },
    saveFiles() {
      localStorage.setItem("fm_files", JSON.stringify(this.state.loadedFiles));
    },
    updateFileList() {
      const c = document.getElementById("filesList");
      if (!c) return;
      const ff = this.getFilteredFiles();
      if (!ff.length) {
        c.innerHTML = `<div class="empty-state"><div class="empty-icon">📁</div><p>${this.state.loadedFiles.length ? "No files match your search" : "No files loaded yet"}</p></div>`;
        this.updateBatchActions();
        return;
      }
      c.innerHTML = ff
        .map(
          (f: any) =>
            `<div class="file-item" data-file-id="${f.id}"><input type="checkbox" class="file-checkbox" ${f.isSelected ? "checked" : ""} onchange="fileManagerSystem.toggleFileSelection('${f.id}',this.checked)"><div class="file-icon">${f.type === "html" ? "📄" : "🌐"}</div><div class="file-details"><div class="file-name" title="${f.name}">${this.truncateText(f.name, 40)}</div><div><span class="file-type">${f.type === "html" ? "HTML File" : "Web URL"}</span></div></div><div class="file-actions"><button class="action-btn open" onclick="fileManagerSystem.openFileInNewTab('${f.id}')">↗️ Open</button><button class="action-btn remove" onclick="fileManagerSystem.removeSingleFile('${f.id}')">🗑️ Remove</button></div></div>`,
        )
        .join("");
      this.updateBatchActions();
    },
    getFilteredFiles() {
      if (!this.state.currentSearch) return this.state.loadedFiles;
      const q = this.state.currentSearch;
      return this.state.loadedFiles.filter(
        (f: any) =>
          f.name.toLowerCase().includes(q) ||
          (f.url && f.url.toLowerCase().includes(q)),
      );
    },
    filterFiles() {
      const s = document.getElementById("fileSearch") as HTMLInputElement;
      if (s) {
        this.state.currentSearch = s.value.toLowerCase();
        this.updateFileList();
      }
    },
    toggleFileSelection(id: string, sel: boolean) {
      const f = this.state.loadedFiles.find((x: any) => x.id === id);
      if (f) {
        f.isSelected = sel;
        if (sel) this.state.selectedFileIds.add(id);
        else this.state.selectedFileIds.delete(id);
        this.saveFiles();
        this.updateBatchActions();
      }
    },
    updateBatchActions() {
      const ba = document.getElementById("batchActions"),
        sc = document.getElementById("selectedCount");
      if (ba && sc) {
        const n = this.state.selectedFileIds.size;
        if (n > 0) {
          ba.style.display = "flex";
          sc.textContent = n.toString();
        } else ba.style.display = "none";
      }
    },
    openSelectedFiles() {
      if (!this.state.selectedFileIds.size) {
        alert("No files selected");
        return;
      }
      this.state.loadedFiles
        .filter((f: any) => this.state.selectedFileIds.has(f.id))
        .forEach((f: any) => window.open(f.url, "_blank"));
      this.clearSelection();
    },
    removeSelectedFiles() {
      if (!this.state.selectedFileIds.size) {
        alert("No files selected");
        return;
      }
      if (!confirm(`Remove ${this.state.selectedFileIds.size} file(s)?`))
        return;
      this.state.loadedFiles.forEach((f: any) => {
        if (
          this.state.selectedFileIds.has(f.id) &&
          f.type === "html" &&
          f.url.startsWith("blob:")
        )
          URL.revokeObjectURL(f.url);
      });
      this.state.loadedFiles = this.state.loadedFiles.filter(
        (f: any) => !this.state.selectedFileIds.has(f.id),
      );
      this.clearSelection();
      this.saveFiles();
      this.updateFileList();
      this.updateFileCount();
    },
    openFileInNewTab(id: string) {
      const f = this.state.loadedFiles.find((x: any) => x.id === id);
      if (f) window.open(f.url, "_blank");
    },
    removeSingleFile(id: string) {
      const f = this.state.loadedFiles.find((x: any) => x.id === id);
      if (!f || !confirm(`Remove "${f.name}"?`)) return;
      if (f.type === "html" && f.url.startsWith("blob:"))
        URL.revokeObjectURL(f.url);
      this.state.loadedFiles = this.state.loadedFiles.filter(
        (x: any) => x.id !== id,
      );
      if (this.state.selectedFileIds.has(id))
        this.state.selectedFileIds.delete(id);
      this.saveFiles();
      this.updateFileList();
      this.updateFileCount();
    },
    clearAllFiles() {
      if (!this.state.loadedFiles.length) return;
      if (!confirm(`Remove all ${this.state.loadedFiles.length} files?`))
        return;
      this.state.loadedFiles.forEach((f: any) => {
        if (f.type === "html" && f.url.startsWith("blob:"))
          URL.revokeObjectURL(f.url);
      });
      this.state.loadedFiles = [];
      this.state.selectedFileIds.clear();
      this.saveFiles();
      this.updateFileList();
      this.updateFileCount();
      this.updateBatchActions();
    },
    clearSelection() {
      this.state.loadedFiles.forEach((f: any) => (f.isSelected = false));
      this.state.selectedFileIds.clear();
      this.saveFiles();
      this.updateFileList();
      this.updateBatchActions();
    },
    updateFileCount() {
      const el = document.getElementById("fileCount");
      if (el) el.textContent = this.state.loadedFiles.length.toString();
    },
    setupDragAndDrop() {
      const drop = document.querySelector(
        "#fileManagerContainer .file-input-label",
      );
      if (!drop) return;
      ["dragenter", "dragover", "dragleave", "drop"].forEach((ev) =>
        drop.addEventListener(
          ev,
          (e) => {
            e.preventDefault();
            e.stopPropagation();
          },
          false,
        ),
      );
      ["dragenter", "dragover"].forEach((ev) =>
        drop.addEventListener(
          ev,
          () => {
            (drop as HTMLElement).style.borderColor = "#667eea";
            (drop as HTMLElement).style.background = "#e0e7ff";
          },
          false,
        ),
      );
      ["dragleave", "drop"].forEach((ev) =>
        drop.addEventListener(
          ev,
          () => {
            (drop as HTMLElement).style.borderColor = "";
            (drop as HTMLElement).style.background = "";
          },
          false,
        ),
      );
      drop.addEventListener(
        "drop",
        (e) => {
          const ev = e as DragEvent;
          const f = ev.dataTransfer?.files[0];
          if (!f) return;
          if (!/\.(html|htm)$/i.test(f.name)) {
            alert("Please drop an HTML file");
            return;
          }
          const inp = document.getElementById(
            "htmlFileInput",
          ) as HTMLInputElement;
          if (!inp) return;
          const dt = new DataTransfer();
          dt.items.add(f);
          inp.files = dt.files;
          inp.dispatchEvent(new Event("change", { bubbles: true }));
        },
        false,
      );
    },
    truncateText(t: string, max: number) {
      return !t || t.length <= max ? t : t.substring(0, max - 3) + "...";
    },
  };

  /* SPLASH SCREEN */
  function initSplash() {
    const names = [
      "Alexandra Elbakyan",
      "Anton Napolsky",
      "Valeriia Ermakova",
      "Anna Archivist (pseudonym)",
      "bookwarrior (pseudonym)",
      "Daniel Khromov",
      "Igor Osychenko",
      "Maxim Moshkov",
      "Gottfrid Svartholm Warg",
      "Fredrik Neij",
      "Peter Sunde",
      "Carl Lundström",
      "Anakata (alias of Gottfrid Svartholm)",
      "TiAMO",
      "Aaron Swartz",
      "Julian Assange",
      "Chelsea Manning",
      "Edward Snowden",
      "Jeremy Hammond",
      "Barrett Brown",
      "Bram Cohen",
      "Shawn Fanning",
      "Sean Parker",
      "Kim Dotcom",
      "Mark Gorton",
      "Niklas Zennström",
      "Janus Friis",
      "Brewster Kahle",
      "Carl Malamud",
      "Rick Prelinger",
      "Jason Scott",
      "Aaron Halfaker",
      "Andy Baio",
      "Maria A. Matienzo",
      "James Jacobs",
      "Lawrence Lessig",
      "Jimmy Wales",
      "Richard Stallman",
      "Linus Torvalds",
      "Eric S. Raymond",
      "Cory Doctorow",
      "Yochai Benkler",
      "John Gilmore",
      "Mitch Kapor",
      "Rick Falkvinge",
      "Julia Reda",
      "Amelia Andersdotter",
      "Christian Engström",
      "Mikuláš Peksa",
      "Falkvinge supporters",
      "Daniel Ellsberg",
      "Glenn Greenwald",
      "Laura Poitras",
      "Jacob Appelbaum",
      "Andy Müller-Maguhn",
      "Jeremie Zimmermann",
      "Cory Ondrejka",
      "Markus Persson",
      "Ernesto Van der Sar",
      "Andy Maxwell",
      "Balázs Bodó",
      "Katarzyna Szymielewicz",
      "Joe Karaganis",
      "Gabriel Weinberg",
      "Benkler collaborators (multiple)",
      "Rasmus Fleischer",
      "Jonas Andersson Schwarz",
      "Felix Stalder",
      "Gabriella Coleman",
      "Nathan Schneider",
      "Ethan Zuckerman",
      "Clay Shirky",
      "Aaron Shaw",
      "Aram Sinnreich",
      "Siva Vaidhyanathan",
      "Wendy Seltzer",
      "James Boyle",
      "Pamela Samuelson",
      "Michael Geist",
      "Hal Abelson",
      "Eben Moglen",
      "Lawrence Liang",
      "Nader El-Sayed",
      "Pranesh Prakash",
      "Renata Avila",
      "Corynne McSherry",
      "Danny O'Brien",
      "Rebecca Giblin",
      "Timothy Vollmer",
      "Heather Joseph",
      "Peter Suber",
      "Stevan Harnad",
    ].sort((a, b) => a.localeCompare(b));

    const extended = [...names, ...names, ...names];
    const lEl = document.getElementById("left-names");
    const rEl = document.getElementById("right-names");
    const cEl = document.getElementById("name-count");

    if (lEl) {
      extended.forEach((n) => {
        const li = document.createElement("li");
        li.textContent = n;
        lEl.appendChild(li);
      });
    }
    if (rEl) {
      extended.forEach((n) => {
        const li = document.createElement("li");
        li.textContent = n;
        rEl.appendChild(li);
      });
    }
    if (cEl) cEl.textContent = `✨ ${names.length} names ✨`;

    const splash = document.getElementById("splash-screen");
    if (splash) {
      setTimeout(() => {
        splash.classList.add("hide");
        setTimeout(() => (splash.style.display = "none"), 1000);
      }, 10000);
    }
  }

  /* ============================================================
     useEffect – inicijalizacija i event listeneri
  ============================================================ */
  useEffect(() => {
    // Inicijalizacija
    rotateQuotes();
    checkSecureCurrentStage();
    loadSecureSchedulePreferences();
    setupDraggableWindows();
    setupContextMenu();

    // Portal cards (DOM mora biti spreman)
    const lc = document.getElementById("localProgramsContainer");
    const wc = document.getElementById("websitesContainer");
    if (lc) localApps.forEach((app) => lc.appendChild(createAppCard(app)));
    if (wc) websites.forEach((site) => wc.appendChild(createWebsiteCard(site)));

    // Portal search
    const portalSearch = document.getElementById("portalSearch");
    if (portalSearch) portalSearch.addEventListener("input", searchPortal);

    // File manager URL enter key
    const urlInput = document.getElementById("webUrlInput");
    if (urlInput) {
      urlInput.addEventListener("keypress", (e) => {
        if ((e as KeyboardEvent).key === "Enter")
          fileManagerSystem.loadWebURL();
      });
    }

    // Image loading states
    document.querySelectorAll("img").forEach((img) => {
      img.addEventListener("load", function () {
        this.classList.remove("loading");
      });
      img.addEventListener("error", function () {
        this.classList.remove("loading");
        this.src =
          "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiIGZpbGw9IiNlZWVlZWUiLz48dGV4dCB4PSIxMDAiIHk9IjEwMCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmaWxsPSIjOTk5IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+SW1hZ2Ugbm90IGZvdW5kPC90ZXh0Pjwvc3ZnPg==";
      });
      if (!img.complete) img.classList.add("loading");
    });

    // Password input keypress
    const pwInput = document.getElementById("password-input");
    if (pwInput) {
      pwInput.addEventListener("keypress", (e) => {
        if ((e as KeyboardEvent).key === "Enter") checkPassword();
      });
    }

    // Mute toggle
    const muteToggle = document.getElementById("muteToggle");
    if (muteToggle) muteToggle.addEventListener("click", toggleSecureMute);

    // Stage alert click outside
    const stageAlert = document.getElementById("stageAlert");
    if (stageAlert) {
      stageAlert.addEventListener("click", (e) => {
        if (e.target === stageAlert) closeStageAlert();
      });
    }

    // Load Ozzy folder button (graph)
    const loadBtn = document.getElementById("loadOzzyFolderBtn");
    if (loadBtn) {
      loadBtn.addEventListener("click", () => {
        const input = document.createElement("input");
        input.type = "file";
        (input as any).webkitdirectory = true;
        input.directory = true;
        input.multiple = true;
        input.onchange = async (e) => {
          const files = (e.target as HTMLInputElement).files;
          if (!files || files.length === 0) return;
          const statusSpan = document.getElementById("graphStatus");
          if (statusSpan) statusSpan.textContent = "Processing files...";
          const graphData = await buildGraphFromFiles(files);
          if (statusSpan)
            statusSpan.textContent = `Loaded ${graphData.nodes.length} nodes, ${graphData.links.length} links`;
          renderGraph(graphData);
          localStorage.setItem("ozzy_folder_path", "loaded");
        };
        input.click();
      });
    }

    // Graph search
    const graphSearch = document.getElementById("graphSearch");
    if (graphSearch) {
      graphSearch.addEventListener("input", (e) => {
        const query = (e.target as HTMLInputElement).value.toLowerCase();
        if (!graphNodes || graphNodes.length === 0) return;
        graphNodes.forEach((node) => {
          const text = document.querySelector(
            `.g-labels text[data-id="${node.id}"]`,
          );
          if (text) {
            const matches = node.name.toLowerCase().includes(query);
            (text as HTMLElement).style.opacity = matches ? "1" : "0.2";
            const circle = document.querySelector(
              `.g-nodes circle[data-id="${node.id}"]`,
            );
            if (circle)
              (circle as HTMLElement).style.opacity = matches ? "1" : "0.2";
          }
        });
      });
    }

    // Back to top scroll
    const backToTop = document.getElementById("backToTop");
    if (backToTop) {
      window.addEventListener("scroll", () => {
        backToTop.style.display = window.pageYOffset > 300 ? "flex" : "none";
      });
    }

    // Splash screen
    initSplash();

    // Intervals
    const quoteInterval = setInterval(rotateQuotes, 5000);
    const countdownInterval = setInterval(updateCountdown, 1000);
    const scheduleInterval = setInterval(checkSecureCurrentStage, 1000);

    // Cleanup
    return () => {
      clearInterval(quoteInterval);
      clearInterval(countdownInterval);
      clearInterval(scheduleInterval);
      clearSecureAlertTimers();
      if (swTimer) clearInterval(swTimer);
    };
  }, []);

  // ============================================================
  // JSX – pretvoreno tijelo HTML-a
  // ============================================================
  return (
    <>
      {/* SPLASH SCREEN */}
      <div id="splash-screen">
        <img
          className="background-logo"
          src="../../../../logo.png"
          alt=""
          onError={(e) => (e.currentTarget.style.display = "none")}
        />
        <div className="thank-you-text">THANK YOU!!!</div>
        <div className="names-container">
          <div className="name-column">
            <ul
              className="name-list left-list"
              id="left-names"
            ></ul>
          </div>
          <div className="name-column">
            <ul
              className="name-list right-list"
              id="right-names"
            ></ul>
          </div>
        </div>
        <div
          className="name-count"
          id="name-count"
        ></div>
      </div>

      {/* PASSWORD MODAL */}
      <div id="pw-overlay">
        <div
          className="security-container"
          id="login-container"
        >
          <div className="security-header">
            <h1>
              <i className="fas fa-lock"></i> Secure Access
            </h1>
            <p style={{ marginTop: "10px", opacity: 0.9 }}>
              Authentication Required
            </p>
          </div>
          <div className="security-body">
            <div className="password-group">
              <input
                className="password-input"
                id="password-input"
                type="password"
                placeholder="Enter master password"
                autoComplete="off"
              />
              <button
                className="toggle-password"
                type="button"
                onClick={togglePasswordVisibility}
              >
                <i
                  className="fas fa-eye"
                  id="pw-eye"
                ></i>
              </button>
            </div>
            <button
              className="login-button"
              id="login-button"
              onClick={checkPassword}
            >
              <i className="fas fa-unlock-alt"></i> Access
            </button>
            <div
              className="error-message"
              id="error-message"
            ></div>
            <div
              className="attempts-info"
              id="attempts-info"
            ></div>
            <button
              className="cancel-button"
              onClick={closePwModal}
            >
              Cancel
            </button>
          </div>
        </div>
        <div
          className="security-container hidden"
          id="lockout-container"
        >
          <div className="lockout-screen">
            <div className="lockout-icon">
              <i className="fas fa-lock"></i>
            </div>
            <h2 style={{ color: "#e74c3c", marginBottom: "10px" }}>
              Security Lockout
            </h2>
            <p style={{ color: "#666", marginBottom: "20px" }}>
              Too many failed login attempts
            </p>
            <div id="lockout-timer">01:00</div>
            <p style={{ color: "#999", fontSize: "12px", marginTop: "30px" }}>
              <i className="fas fa-exclamation-triangle"></i> System temporarily
              locked
            </p>
            <button
              className="cancel-button"
              style={{ marginTop: "20px" }}
              onClick={closePwModal}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div
        id="backToTop"
        title="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <i className="fas fa-chevron-up"></i>
      </div>
      <div id="toastContainer"></div>
      <div
        className="window-overlay"
        id="window-overlay"
        onClick={closeAllWindows}
      ></div>

      {/* First Quotes Grid */}
      <div className="quotes-grid-container">
        <div
          className="quotes-item"
          id="quotes-item-1"
        ></div>
        <div className="button-item">
          <button
            id="Button_1"
            data-tooltip="Settings"
            title="Settings"
            onClick={() => handleProtectedButton("settings-window")}
          >
            <img
              src="Technical Builds/Ozzy_Knows/Settings_Logo.png"
              alt="Settings"
            />
          </button>
        </div>
      </div>

      {/* Countdown Timer */}
      <p id="demo"></p>

      {/* Main Subjects */}
      <h1 id="Link_1">OSNOVNI PREDMETI (&#8595;)</h1>
      <div
        className="photo-grid-container"
        id="mainSubjects"
      >
        <div className="photo-item">
          <a
            href="http://127.0.0.1:5500/Course/Biology/Biology.html"
            title="Biologija"
          >
            <img
              src="Course/Biology/Background_image.png"
              alt="Biology"
              loading="lazy"
            />
            <span>Biologija</span>
          </a>
        </div>
        <div className="photo-item">
          <a
            href="http://127.0.0.1:5500/Course/English/English.html"
            title="Engleski"
            target="_blank"
          >
            <img
              src="Course/English/Background.png"
              alt="English"
              loading="lazy"
            />
            <span>Engleski</span>
          </a>
        </div>
        <div className="photo-item">
          <a
            href="http://127.0.0.1:5500/Course/Fizika/Fizika.html"
            title="Fizika"
            target="_blank"
          >
            <img
              src="Course/Fizika/Background_Image.png"
              alt="Physics"
              loading="lazy"
            />
            <span>Fizika</span>
          </a>
        </div>
        <div className="photo-item">
          <a
            href="http://127.0.0.1:5500/Course/Hrvatski/Hrvatski.html"
            title="Hrvatski"
          >
            <img
              src="Course/Hrvatski/Background_image.png"
              alt="Croatian"
              loading="lazy"
            />
            <span>Hrvatski</span>
          </a>
        </div>
        <div className="photo-item">
          <a
            href="http://127.0.0.1:5500/Course/Kemija/Kemija.html"
            title="Kemija"
          >
            <img
              src="Course/Kemija/Background_image.png"
              alt="Chemistry"
              loading="lazy"
            />
            <span>Kemija</span>
          </a>
        </div>
        <div className="photo-item">
          <a
            href="http://127.0.0.1:5500/Course/Math/Math.html"
            title="Math"
          >
            <img
              src="Course/Math/Background_Image.png"
              alt="Mathematics"
              loading="lazy"
            />
            <span>Matematika</span>
          </a>
        </div>
      </div>

      {/* Other Subjects */}
      <div
        className="grid-container1"
        id="otherSubjects"
      >
        <h1 id="Link_2">OSTALI PREDMETI (↓)</h1>
        <h5>
          <a
            data-tooltip="Logika"
            href="http://127.0.0.1:5500/Course/Ostali%20predmeti%20(nije%20za%20maturu%20(3,4%20razredi))/Logika/Logika.html"
          >
            <i className="fas fa-brain"></i> Logika
          </a>
          <a
            data-tooltip="Povijest"
            href="http://127.0.0.1:5500/Course/Ostali%20predmeti%20(nije%20za%20maturu%20(3,4%20razredi))/Povijest/Povijest.html"
          >
            <i className="fas fa-landmark"></i> Povijest
          </a>
          <a
            data-tooltip="Psihologija"
            href="http://127.0.0.1:5500/Course/Ostali%20predmeti%20(nije%20za%20maturu%20(3,4%20razredi))/Psihologija/Psihologija.html"
          >
            <i className="fas fa-user-friends"></i> Psihologija
          </a>
          <a
            data-tooltip="Socijologija"
            href="http://127.0.0.1:5500/Course/Ostali%20predmeti%20(nije%20za%20maturu%20(3,4%20razredi))/Socijologija/%C5%9Eocijologija.html"
          >
            <i className="fas fa-users"></i> Socijologija
          </a>
          <a
            data-tooltip="Deutsch"
            href="https://learngerman.dw.com/en/learn-german/s-9528"
            target="_blank"
          >
            <i className="fas fa-language"></i> Deutsch
          </a>
          <a
            data-tooltip="Likovni"
            href="http://127.0.0.1:5500/Course/Ostali%20predmeti%20(nije%20za%20maturu%20(3,4%20razredi))/Likovni.html"
          >
            <i className="fas fa-palette"></i> Likovni
          </a>
          <a
            data-tooltip="Nutricionizam"
            href="http://127.0.0.1:5500/Course/Ostali%20predmeti%20(nije%20za%20maturu%20(3,4%20razredi))/Nutricionizam/Nutricionizam.html"
          >
            <i className="fas fa-apple-alt"></i> Nutricionizam
          </a>
          <a
            data-tooltip="Glazbeni"
            href="http://127.0.0.1:5500/Course/Ostali%20predmeti%20(nije%20za%20maturu%20(3,4%20razredi))/Glazbeni/Glazbeni.html"
          >
            <i className="fas fa-music"></i> Glazbeni
          </a>
        </h5>
      </div>

      {/* Second Quotes Grid */}
      <div
        className="quotes-grid-container"
        id="quotes-grid-container_2"
      >
        <div className="button-item">
          <button
            id="Button_3"
            data-tooltip="Graph View"
            title="Graph View"
            onClick={() => handleProtectedButton("graph-window")}
          >
            <img
              src="Technical Builds/Ozzy_Knows/Linking_Logo.png"
              alt="Graph View"
            />
          </button>
        </div>
        <div
          className="quotes-item"
          id="quotes-item-2"
        ></div>
      </div>

      {/* ======================== WINDOWS ======================== */}

      {/* Settings Window */}
      <div
        className="new-window"
        id="settings-window"
      >
        <div
          className="window-drag-handle"
          id="drag-settings"
        >
          <h2>
            <i className="fas fa-cog"></i> Settings Panel
          </h2>
          <button
            className="window-close-btn"
            onClick={() => toggleNewWindow("settings-window")}
          >
            <i className="fas fa-times"></i>
          </button>
        </div>
        <div className="window-content">
          <div className="settings-grid">
            <div
              className="settings-card"
              onClick={() => toggleNewWindow("empty-window")}
            >
              <i className="fas fa-link"></i>
              <span>Quick Links</span>
            </div>
            <div
              className="settings-card"
              onClick={() => toggleNewWindow("stopwatch-window")}
            >
              <i className="fas fa-stopwatch"></i>
              <span>Timer</span>
            </div>
            <div
              className="settings-card"
              onClick={() => toggleNewWindow("school-portal-window")}
            >
              <i className="fas fa-school"></i>
              <span>School Portal</span>
            </div>
            <div
              className="settings-card"
              onClick={() => toggleNewWindow("html-look-window")}
            >
              <i className="fas fa-code"></i>
              <span>HTML Look</span>
            </div>
            <div
              className="settings-card"
              onClick={() =>
                window.open(
                  "http://127.0.0.1:5500/Technical%20Builds/Testing/EMERGANCY/Debug%20panel/Debug_Tool.html",
                  "_blank",
                )
              }
            >
              <i className="fas fa-bug"></i>
              <span>Universal Debug panel</span>
            </div>
            <div
              className="settings-card"
              onClick={() => toggleNewWindow("testing-prototypes-window")}
            >
              <i className="fas fa-flask"></i>
              <span>Testing &amp; Prototypes</span>
            </div>
            <div
              className="settings-card"
              onClick={() => toggleNewWindow("secure-schedule-window")}
            >
              <i className="fas fa-shield-alt"></i>
              <span>Secure Schedule System</span>
            </div>
            <div
              className="settings-card virtual-card"
              onClick={() =>
                window.open(
                  "http://127.0.0.1:5500/Course/Internet/Virtual%20Component%20for%20Testing%20(HQ).html",
                  "_blank",
                )
              }
            >
              <i className="fas fa-vr-cardboard"></i>
              <span>Virtual Component for Testing (HQ)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Graph Window */}
      <div
        className="new-window"
        id="graph-window"
        style={{ maxWidth: "1000px" }}
      >
        <div
          className="window-drag-handle"
          id="drag-graph"
        >
          <h2>
            <i className="fas fa-project-diagram"></i> Ozzy_Knows · Graph View
          </h2>
          <button
            className="window-close-btn"
            onClick={() => toggleNewWindow("graph-window")}
          >
            <i className="fas fa-times"></i>
          </button>
        </div>
        <div
          className="window-content"
          style={{ padding: 0, background: "#0d0d17" }}
        >
          <div className="graph-controls">
            <div className="graph-controls-left">
              <button
                className="button-33"
                id="loadOzzyFolderBtn"
                style={{ margin: 0, background: "#5c6bc0", color: "white" }}
              >
                <i className="fas fa-folder-open"></i> Load Ozzy_Knows Folder
              </button>
              <div className="graph-legend">
                <div className="legend-item">
                  <div className="legend-color folder"></div>
                  <span>Folders</span>
                </div>
                <div className="legend-item">
                  <div className="legend-color html"></div>
                  <span>HTML</span>
                </div>
                <div className="legend-item">
                  <div className="legend-color text"></div>
                  <span>MD/TXT</span>
                </div>
              </div>
            </div>
            <div className="graph-controls-right">
              <input
                className="graph-search"
                id="graphSearch"
                type="text"
                placeholder="Search nodes..."
              />
              <span
                className="graph-status"
                id="graphStatus"
              >
                Ready
              </span>
            </div>
          </div>
          <div id="d3-container"></div>
          <div className="graph-info-bar">
            <span className="graph-badge">📁 Ozzy_Knows</span>
            <span>Folders (orange) · HTML (blue) · MD/TXT (green)</span>
            <span className="graph-note">
              ✨ drag • hover to highlight connections
            </span>
          </div>
        </div>
      </div>

      {/* Secure Schedule Window */}
      <div
        className="new-window"
        id="secure-schedule-window"
        style={{ maxWidth: "900px" }}
      >
        <div
          className="window-drag-handle"
          id="drag-schedule"
        >
          <h2>
            <i className="fas fa-shield-alt"></i> Secure Schedule System
          </h2>
          <button
            className="window-close-btn"
            onClick={() => toggleNewWindow("secure-schedule-window")}
          >
            <i className="fas fa-times"></i>
          </button>
        </div>
        <div className="window-content">
          <div className="secure-polyphasic-schedule">
            <div
              style={{
                textAlign: "center",
                marginBottom: "30px",
                position: "relative",
              }}
            >
              <h1
                style={{
                  color: "#60a5fa",
                  marginBottom: "10px",
                  fontSize: "2.2rem",
                  letterSpacing: "1px",
                }}
              >
                Secure Schedule Monitor
              </h1>
              <p
                style={{
                  color: "#94a3b8",
                  fontSize: "1rem",
                  maxWidth: "800px",
                  margin: "0 auto",
                }}
              >
                Automated stage alerts for workday and restday schedules
              </p>
              <div
                className="mute-toggle"
                id="muteToggle"
                style={{ position: "absolute", top: "10px", right: "10px" }}
              >
                <div
                  className="mute-icon"
                  id="muteIcon"
                >
                  🔔
                </div>
              </div>
              <div
                style={{
                  position: "absolute",
                  top: "10px",
                  left: "10px",
                  background: "#1e293b",
                  borderRadius: "10px",
                  padding: "10px 15px",
                  border: "2px solid #475569",
                  color: "#94a3b8",
                  fontSize: "0.9rem",
                }}
              >
                Next stage in: <span id="nextStageTime">--:--</span>
              </div>
            </div>
            <div className="secure-schedule-type-selector">
              <button
                className="secure-schedule-btn active"
                id="secureWorkdayBtn"
                onClick={() => switchSecureSchedule("workday")}
              >
                Workday Schedule
              </button>
              <button
                className="secure-schedule-btn"
                id="secureRestdayBtn"
                onClick={() => switchSecureSchedule("restday")}
              >
                Restday Schedule
              </button>
            </div>
            <div className="secure-current-schedule-info">
              <h2
                className="secure-schedule-status"
                id="secureScheduleName"
              >
                Workday Schedule Active
              </h2>
              <p style={{ color: "#94a3b8", marginBottom: "20px" }}>
                The secure schedule system is actively monitoring time segments.
                Stage alerts will appear automatically.
              </p>
              <p style={{ color: "#60a5fa", fontWeight: 500 }}>
                Current status:{" "}
                <span id="secureCurrentActivity">Monitoring...</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* School Portal Window */}
      <div
        className="new-window"
        id="school-portal-window"
      >
        <div
          className="window-drag-handle"
          id="drag-portal"
        >
          <h2>
            <i className="fas fa-school"></i> School Programs &amp; Resources
            Portal
          </h2>
          <button
            className="window-close-btn"
            onClick={() => toggleNewWindow("school-portal-window")}
          >
            <i className="fas fa-times"></i>
          </button>
        </div>
        <div className="window-content">
          <p style={{ color: "#666", marginBottom: "20px" }}>
            Access local programs and educational websites
          </p>
          <button
            className="add-item-button"
            onClick={addNewPortalItem}
          >
            <i className="fas fa-plus"></i> Add New Item
          </button>
          <div
            className="filter-chips"
            id="portalFilters"
          >
            <span
              className="filter-chip active"
              data-filter="local"
              onClick={() => filterPortal("local")}
            >
              Local Apps
            </span>
            <span
              className="filter-chip"
              data-filter="website"
              onClick={() => filterPortal("website")}
            >
              Websites
            </span>
          </div>
          <input
            id="portalSearch"
            type="text"
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "20px",
              borderRadius: "8px",
              border: "2px solid #ddd",
            }}
            placeholder="Search within portal..."
          />
          <div
            className="tab-content active"
            id="local-programs-tab"
          >
            <div
              className="portal-grid"
              id="localProgramsContainer"
            ></div>
          </div>
          <div
            className="tab-content"
            id="websites-tab"
          >
            <div
              className="portal-grid"
              id="websitesContainer"
            ></div>
          </div>
          <div style={{ marginTop: "20px", fontSize: "0.9rem", color: "#666" }}>
            <i className="fas fa-info-circle"></i> Tip: Right-click any item for
            more options
          </div>
        </div>
      </div>

      {/* Stopwatch Window */}
      <div
        className="new-window"
        id="stopwatch-window"
      >
        <div
          className="window-drag-handle"
          id="drag-stopwatch"
        >
          <h2>
            <i className="fas fa-stopwatch"></i> Stopwatch
          </h2>
          <button
            className="window-close-btn"
            onClick={() => toggleNewWindow("stopwatch-window")}
          >
            <i className="fas fa-times"></i>
          </button>
        </div>
        <div className="window-content">
          <div className="stopwatch-container">
            <h1 id="Timer_1">00:00:00</h1>
            <div className="stopwatch-controls">
              <button
                className="stopwatch-btn start"
                onClick={watchStart}
              >
                <i className="fas fa-play"></i>
              </button>
              <button
                className="stopwatch-btn stop"
                onClick={watchStop}
              >
                <i className="fas fa-stop"></i>
              </button>
              <button
                className="stopwatch-btn reset"
                onClick={confirmReset}
              >
                <i className="fas fa-undo-alt"></i>
              </button>
              <button
                className="stopwatch-btn lap"
                onClick={addLap}
              >
                <i className="fas fa-flag"></i>
              </button>
            </div>
            <div className="stopwatch-progress">
              <div
                className="stopwatch-progress-bar"
                id="stopwatchProgress"
              ></div>
            </div>
            <div id="lapTimes"></div>
          </div>
        </div>
      </div>

      {/* Quick Links Window */}
      <div
        className="new-window"
        id="empty-window"
      >
        <div
          className="window-drag-handle"
          id="drag-quicklinks"
        >
          <h2>
            <i className="fas fa-external-link-alt"></i> Quick Links
          </h2>
          <button
            className="window-close-btn"
            onClick={() => toggleNewWindow("empty-window")}
          >
            <i className="fas fa-times"></i>
          </button>
        </div>
        <div className="window-content">
          <div style={{ textAlign: "left", padding: "20px" }}>
            <a
              className="button-33"
              href="https://scholar.google.com/"
              style={{ display: "block", margin: "10px 0" }}
              target="_blank"
            >
              <i className="fas fa-search"></i> Istraživanje podataka (projekti)
            </a>
            <a
              className="button-33"
              href="https://www.science.org/"
              style={{ display: "block", margin: "10px 0" }}
              target="_blank"
            >
              <i className="fas fa-newspaper"></i> Novosti_1
            </a>
            <a
              className="button-33"
              href="https://www.ccdc.cam.ac.uk/"
              style={{ display: "block", margin: "10px 0" }}
              target="_blank"
            >
              <i className="fas fa-flask"></i> Novosti (UK)
            </a>
          </div>
          <div style={{ marginTop: "20px" }}>
            <button
              className="button-33"
              onClick={copyAllLinks}
            >
              <i className="fas fa-copy"></i> Copy All Links
            </button>
          </div>
        </div>
      </div>

      {/* HTML Look Window */}
      <div
        className="new-window"
        id="html-look-window"
      >
        <div
          className="window-drag-handle"
          id="drag-htmllook"
        >
          <h2>
            <i className="fas fa-code"></i> HTML Look Templates
          </h2>
          <button
            className="window-close-btn"
            onClick={() => toggleNewWindow("html-look-window")}
          >
            <i className="fas fa-times"></i>
          </button>
        </div>
        <div className="window-content">
          <p style={{ color: "#666", marginBottom: "20px" }}>
            Ready-to-use HTML templates for different types of pages
          </p>
          <div style={{ textAlign: "left", padding: "20px" }}>
            <a
              className="button-33"
              href="http://localhost:8080/Technical%20Builds/Testing/Osnovni%20izgled%20Stranice%20(SPOREDNI%20PREDMET).html"
              style={{ display: "block", margin: "10px 0" }}
              target="_blank"
            >
              <i className="fas fa-book"></i> Side Subject Template
            </a>
            <a
              className="button-33"
              href="http://localhost:8080/Technical%20Builds/Testing/Osnovni%20izgled%20Stranice%20(GLAVNI%20PREDMET).html"
              style={{ display: "block", margin: "10px 0" }}
              target="_blank"
            >
              <i className="fas fa-graduation-cap"></i> Main Subject Template
            </a>
            <a
              className="button-33"
              href="http://localhost:8080/Technical%20Builds/Functioning%20Prototypes/The_Final_Look.html"
              style={{ display: "block", margin: "10px 0" }}
              target="_blank"
            >
              <i className="fas fa-paint-brush"></i> Final Design Prototype
            </a>
          </div>
          <div
            style={{
              marginTop: "30px",
              textAlign: "left",
              background: "#f8f9fa",
              padding: "15px",
              borderRadius: "10px",
            }}
          >
            <h4 style={{ marginTop: 0, color: "#1a237e" }}>
              <i className="fas fa-lightbulb"></i> Usage Tips:
            </h4>
            <ul style={{ marginBottom: 0, color: "#666" }}>
              <li>Click any template to open it in a new tab</li>
              <li>All templates are responsive and mobile-friendly</li>
              <li>Customize colors and content to match your needs</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Testing and Prototypes Window */}
      <div
        className="new-window"
        id="testing-prototypes-window"
        style={{ maxWidth: "1200px" }}
      >
        <div
          className="window-drag-handle"
          id="drag-filemgr"
        >
          <h2>
            <i className="fas fa-flask"></i> Testing &amp; Prototypes - HTML
            File Manager
          </h2>
          <button
            className="window-close-btn"
            onClick={() => toggleNewWindow("testing-prototypes-window")}
          >
            <i className="fas fa-times"></i>
          </button>
        </div>
        <div className="window-content">
          <div
            className="file-manager-container"
            id="fileManagerContainer"
          >
            <div id="fileManagerContent">
              <header>
                <h1 className="file-manager-title">
                  <span>📁</span> HTML File Manager
                </h1>
                <p className="file-manager-subtitle">
                  Manage and open HTML files in new tabs
                </p>
              </header>
              <div className="file-manager-content">
                <div className="input-section">
                  <div className="mode-switch">
                    <button
                      className="mode-btn active"
                      onClick={() => fileManagerSystem.switchMode("file")}
                    >
                      <span>📄</span> File Mode
                    </button>
                    <button
                      className="mode-btn"
                      onClick={() => fileManagerSystem.switchMode("url")}
                    >
                      <span>🌐</span> URL Mode
                    </button>
                  </div>
                  <div id="fileMode">
                    <div className="file-input-wrapper">
                      <input
                        className="file-input"
                        id="htmlFileInput"
                        type="file"
                        accept=".html,.htm"
                        onChange={(e) => fileManagerSystem.handleFileSelect(e)}
                      />
                      <label
                        className="file-input-label"
                        htmlFor="htmlFileInput"
                      >
                        📁 Click to select HTML files or drag &amp; drop here
                      </label>
                    </div>
                    <div
                      className="selected-file-info"
                      id="selectedFileInfo"
                      style={{ display: "none" }}
                    >
                      <div>
                        <div
                          style={{
                            fontSize: "12px",
                            color: "#64748b",
                            marginBottom: "2px",
                          }}
                        >
                          Selected File:
                        </div>
                        <div
                          className="selected-file-name"
                          id="selectedFileName"
                        >
                          No file selected
                        </div>
                      </div>
                      <button
                        className="remove-selected"
                        onClick={() => fileManagerSystem.clearSelectedFile()}
                      >
                        ×
                      </button>
                    </div>
                    <div style={{ display: "flex", gap: "12px" }}>
                      <button
                        className="fm-button"
                        onClick={() => fileManagerSystem.loadSelectedFile()}
                      >
                        <span>📂</span> Add HTML File
                      </button>
                      <button
                        className="fm-button secondary"
                        onClick={() => fileManagerSystem.clearAllFiles()}
                      >
                        <span>🗑️</span> Clear All Files
                      </button>
                    </div>
                  </div>
                  <div
                    id="urlMode"
                    style={{ display: "none" }}
                  >
                    <div className="url-input-group">
                      <input
                        className="url-input"
                        id="webUrlInput"
                        type="text"
                        placeholder="https://example.com"
                      />
                      <button
                        className="fm-button"
                        onClick={() => fileManagerSystem.loadWebURL()}
                      >
                        <span>🌐</span> Add Web URL
                      </button>
                    </div>
                  </div>
                </div>
                <div className="files-section">
                  <div className="files-header">
                    <div className="files-title">Your Files</div>
                    <div className="files-count">
                      <span id="fileCount">0</span> files loaded
                    </div>
                  </div>
                  <div className="search-box">
                    <span className="search-icon">🔍</span>
                    <input
                      className="search-input"
                      id="fileSearch"
                      type="text"
                      placeholder="Search files by name or URL..."
                      onKeyUp={() => fileManagerSystem.filterFiles()}
                    />
                  </div>
                  <div className="files-container">
                    <div
                      className="files-list"
                      id="filesList"
                    >
                      <div className="empty-state">
                        <div className="empty-icon">📁</div>
                        <p>No files loaded yet</p>
                        <p style={{ fontSize: "13px", marginTop: "8px" }}>
                          Add HTML files or web URLs to get started
                        </p>
                      </div>
                    </div>
                    <div
                      className="batch-actions"
                      id="batchActions"
                      style={{ display: "none" }}
                    >
                      <div className="selection-info">
                        <span id="selectedCount">0</span> files selected
                      </div>
                      <div className="batch-buttons">
                        <button
                          className="batch-btn open"
                          onClick={() => fileManagerSystem.openSelectedFiles()}
                        >
                          <span>↗️</span> Open Selected
                        </button>
                        <button
                          className="batch-btn remove"
                          onClick={() =>
                            fileManagerSystem.removeSelectedFiles()
                          }
                        >
                          <span>🗑️</span> Remove Selected
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stage Alerts */}
      <div
        className="stage-alert"
        id="stageAlert"
      >
        <div
          className="alert-content"
          id="alertContent"
        >
          <h2 className="alert-title">Stage Change</h2>
          <div
            className="alert-activity rest"
            id="alertActivity"
          >
            REST
          </div>
          <div
            className="alert-interval"
            id="alertInterval"
          >
            1:30 - 6:00
          </div>
          <div className="alert-countdown">
            Alert will close in <span id="countdownTimer">5</span> seconds
          </div>
          <button
            className="close-alert-btn"
            id="closeAlertBtn"
            onClick={closeStageAlert}
          >
            Continue
          </button>
          <div className="alert-footer">
            Next stage will start automatically
          </div>
        </div>
      </div>

      <div
        className="stage-notification"
        id="stageNotification"
      >
        <div
          className="notification-icon"
          id="notificationIcon"
        >
          ⏰
        </div>
        <div className="notification-content">
          <div
            className="notification-activity"
            id="notificationActivity"
          >
            Rest Stage
          </div>
          <div
            className="notification-interval"
            id="notificationInterval"
          >
            1:30 - 6:00
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

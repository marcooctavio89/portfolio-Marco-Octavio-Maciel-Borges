var e=document.getElementById(`terminal-form`),t=document.getElementById(`terminal-input`),n=document.getElementById(`terminal-output`),r=document.getElementById(`terminal-screen`),i=document.querySelectorAll(`.cmd-chip`),a=[],o=-1,s={help:`
<div class="text-[#00ff66] font-bold mb-1">COMANDOS DISPONIBLES:</div>
<div class="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs">
  <div><span class="text-[#00f0ff] font-bold">whoami</span>      - Resumen del perfil profesional</div>
  <div><span class="text-[#00f0ff] font-bold">skills</span>      - Matriz de habilidades técnicas</div>
  <div><span class="text-[#00f0ff] font-bold">projects</span>    - Casos prácticos y auditorías</div>
  <div><span class="text-[#00f0ff] font-bold">languages</span>   - Idiomas y niveles</div>
  <div><span class="text-[#00f0ff] font-bold">contact</span>     - Canales de contacto y redes</div>
  <div><span class="text-[#00f0ff] font-bold">github</span>      - Abre el repositorio GitHub en nueva pestaña</div>
  <div><span class="text-[#00f0ff] font-bold">cv</span>          - Descarga el currículum en PDF</div>
  <div><span class="text-[#00f0ff] font-bold">status</span>      - Diagnóstico y telemetría de servicios</div>
  <div><span class="text-[#00f0ff] font-bold">clear</span>       - Limpia la pantalla de la terminal</div>
</div>
`,whoami:`
<div class="p-2 rounded bg-[#0b0f19] border border-[#1f293d] space-y-1">
  <div class="text-white font-bold text-sm">Marco Octavio Maciel Borges</div>
  <div class="text-[#00ff66]">Técnico en Administración de Sistemas, Redes y Ciberseguridad (ASIX)</div>
  <div class="text-slate-400 text-xs leading-relaxed">
    Especialista en infraestructura Linux/Windows Server, auditoría forense con Wireshark, monitorización centralizada con pila ELK y automatización mediante scripts en Python y Bash.
  </div>
</div>
`,skills:`
<div class="space-y-2 text-xs">
  <div><span class="text-[#00f0ff] font-bold">SISTEMAS & REDES:</span> Linux (Ubuntu Server, LVM, Bash), Windows Server (Active Directory, GPO, FSMO, Samba AD), DNS (BIND9).</div>
  <div><span class="text-[#00ff66] font-bold">CIBERSEGURIDAD:</span> Wireshark (análisis paquetes), Nmap, Metasploitable, scripts de auditoría en Python, Hardening (SSH, UFW, Iptables).</div>
  <div><span class="text-purple-400 font-bold">MONITORIZACIÓN / SIEM:</span> Pila ELK (Elasticsearch 8, Kibana Dashboards, agentes Winlogbeat).</div>
  <div><span class="text-amber-400 font-bold">DESARROLLO & BD:</span> Python (automatización), PHP, MySQL, Apache, HTML5/CSS3, Git.</div>
</div>
`,projects:`
<div class="space-y-2 text-xs">
  <div><span class="text-[#00ff66] font-bold">1. Script Auditoría SSH (auth.log):</span> Detección de ataques de fuerza bruta y parsing forense con Python. <a href="https://github.com/marcooctavio89" target="_blank" class="text-[#00f0ff] underline">github.com/marcooctavio89</a></div>
  <div><span class="text-[#00f0ff] font-bold">2. Análisis Tráfico Red:</span> Laboratorio con Wireshark sobre servicios FTP/Web en entorno Metasploitable.</div>
  <div><span class="text-purple-400 font-bold">3. Infraestructura Active Directory & Samba AD:</span> Despliegue de controladores de dominio, auditoría GPO y roles FSMO.</div>
  <div><span class="text-amber-400 font-bold">4. Entorno SIEM Centralizado:</span> Ingesta de eventos con Elasticsearch 8, Kibana y Winlogbeat en Ubuntu.</div>
</div>
`,languages:`
<div class="text-xs space-y-1">
  <div>🇪🇸 <span class="font-bold text-white">Español:</span> <span class="text-[#00ff66]">Nativo</span></div>
  <div>🏴󠁥󠁳󠁣󠁴󠁿 <span class="font-bold text-white">Catalán:</span> <span class="text-[#00ff66]">Nativo</span></div>
  <div>🇵🇹 <span class="font-bold text-white">Portugués:</span> <span class="text-[#00ff66]">Nativo</span></div>
  <div>🇬🇧 <span class="font-bold text-white">Inglés:</span> <span class="text-[#00f0ff] font-semibold">B2 (Competencia Profesional)</span></div>
</div>
`,contact:`
<div class="text-xs space-y-1">
  <div>📧 <span class="text-slate-400">Email:</span> <a href="mailto:marcooctavio89@gmail.com" class="text-[#00f0ff] hover:underline font-bold">marcooctavio89@gmail.com</a></div>
  <div>🐙 <span class="text-slate-400">GitHub:</span> <a href="https://github.com/marcooctavio89" target="_blank" class="text-[#00ff66] hover:underline">https://github.com/marcooctavio89</a></div>
  <div>💼 <span class="text-slate-400">Perfil:</span> Administrador de Sistemas, Redes y Ciberseguridad</div>
</div>
`,status:`
<div class="font-mono text-xs space-y-1 text-slate-300">
  <div>[SYSTEM] Node Status: <span class="text-[#00ff66] font-bold">HEALTHY / ALL SERVICES UP</span></div>
  <div>[SYSADMIN] Linux / Windows Server Domain: <span class="text-[#00f0ff]">SYNCHRONIZED</span></div>
  <div>[SECURITY] IDS/IPS & Log Parser: <span class="text-[#00ff66]">MONITORING</span></div>
  <div>[SIEM] Elasticsearch Cluster: <span class="text-amber-400">STATUS GREEN (3 NODES)</span></div>
</div>
`,github:()=>(window.open(`https://github.com/marcooctavio89`,`_blank`),`<span class="text-[#00f0ff]">Redirigiendo a https://github.com/marcooctavio89 en una nueva pestaña...</span>`),cv:()=>{let e=document.createElement(`a`);return e.href=`/Marco_Maciel_CV.pdf`,e.download=`Marco_Maciel_CV.pdf`,e.click(),`<span class="text-[#00ff66]">Descargando /Marco_Maciel_CV.pdf...</span>`},sudo:`
<div class="text-red-400 font-bold text-xs">
  [SECURITY ALERT] marco is not in the sudoers file. This incident will be reported to root.
</div>
`,clear:()=>(n&&(n.innerHTML=``),``)};function c(e){let t=e.trim().toLowerCase();if(!t)return;a.push(e),o=a.length;let i=document.createElement(`div`);i.className=`flex items-center gap-2 text-slate-400`,i.innerHTML=`<span class="text-[#00ff66] font-bold">marco@secops:~$</span> <span class="text-white">${e}</span>`,n?.appendChild(i);let c=document.createElement(`div`);if(c.className=`text-xs text-slate-300 pl-4 py-1`,t===`clear`)s.clear(),r&&(r.scrollTop=r.scrollHeight);else{if(t in s){let e=s[t];c.innerHTML=typeof e==`function`?e():e}else c.innerHTML=`
        <span class="text-red-400 font-mono">bash: comando no encontrado: ${e}</span>. 
        Escribe <span class="text-[#00ff66] underline cursor-pointer" onclick="document.querySelector('[data-cmd=help]')?.dispatchEvent(new Event('click'))">help</span> para consultar los comandos válidos.
      `;n?.appendChild(c),r&&(r.scrollTop=r.scrollHeight)}}e?.addEventListener(`submit`,e=>{e.preventDefault(),t&&(c(t.value),t.value=``)}),t?.addEventListener(`keydown`,e=>{e.key===`ArrowUp`?(e.preventDefault(),a.length>0&&o>0&&(o--,t.value=a[o])):e.key===`ArrowDown`&&(e.preventDefault(),o<a.length-1?(o++,t.value=a[o]):(o=a.length,t.value=``))}),i.forEach(e=>{e.addEventListener(`click`,()=>{let n=e.getAttribute(`data-cmd`);n&&(c(n),t&&t.focus())})});
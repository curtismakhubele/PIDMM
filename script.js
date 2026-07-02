const stats = [
  { label: 'Open Work Orders', value: '24', tone: 'accent' },
  { label: 'Asset Health', value: '92%', tone: 'accent' },
  { label: 'Compliance Score', value: '96%', tone: 'accent' },
  { label: 'Learners Supported', value: '1,248', tone: 'accent' }
];

const workOrders = [
  { title: 'HVAC filter replacement', location: 'Science Block', priority: 'High' },
  { title: 'Lighting fault in corridor', location: 'Main Hall', priority: 'Medium' },
  { title: 'Water leak at restroom', location: 'Admin Wing', priority: 'Critical' }
];

const reports = [
  { title: 'Roof inspection completed', detail: 'No critical defects found', status: 'Resolved' },
  { title: 'Safety drill logged', detail: '12 staff participants', status: 'Reviewed' },
  { title: 'Visitor count spike', detail: 'Student orientation day', status: 'Monitoring' }
];

const oshaChecks = [
  { label: 'Fire extinguisher inspection', status: 'Complete' },
  { label: 'PPE stock check', status: 'Complete' },
  { label: 'Electrical panel audit', status: 'Pending' }
];

const assets = [
  { name: 'Generator Unit A', status: 'Operational', location: 'North Yard' },
  { name: 'Elevator 2', status: 'Service', location: 'Library Wing' },
  { name: 'Security Camera Set', status: 'Online', location: 'Campus Gate' }
];

const gpsRoutes = [
  { name: 'Facilities van', location: 'Route 4', status: 'On schedule' },
  { name: 'Maintenance crew', location: 'North Labs', status: 'En route' },
  { name: 'Security patrol', location: 'Sports Field', status: 'Monitoring' }
];

const schedules = [
  { task: 'Boiler maintenance', date: 'Jul 03' },
  { task: 'Roof waterproof check', date: 'Jul 05' },
  { task: 'Generator test', date: 'Jul 07' }
];

const projects = [
  { title: 'Smart classroom retrofit', progress: '74%' },
  { title: 'Water-saving irrigation upgrade', progress: '41%' },
  { title: 'Accessible entrance upgrade', progress: '88%' }
];

const support = [
  { label: 'Learners', value: '1,248' },
  { label: 'Educators', value: '96' },
  { label: 'Students', value: '842' },
  { label: 'Visitors', value: '214' }
];

function renderStats() {
  const container = document.getElementById('statsGrid');
  container.innerHTML = stats
    .map(
      (stat) => `
        <div class="stat-card">
          <div class="label">${stat.label}</div>
          <div class="value">${stat.value}</div>
        </div>
      `
    )
    .join('');
}

function renderWorkOrders() {
  const list = document.getElementById('workOrderList');
  list.innerHTML = workOrders
    .map(
      (item) => `
        <div class="item-row">
          <div>
            <strong>${item.title}</strong>
            <div class="meta">${item.location}</div>
          </div>
          <span class="badge ${item.priority.toLowerCase()}">${item.priority}</span>
        </div>
      `
    )
    .join('');
}

function renderReports() {
  const list = document.getElementById('reportList');
  list.innerHTML = reports
    .map(
      (item) => `
        <div class="item-row">
          <div>
            <strong>${item.title}</strong>
            <div class="meta">${item.detail}</div>
          </div>
          <span class="badge low">${item.status}</span>
        </div>
      `
    )
    .join('');
}

function renderOsha() {
  const list = document.getElementById('oshaList');
  list.innerHTML = oshaChecks
    .map(
      (item) => `
        <li>
          <span>${item.label}</span>
          <span class="meta">${item.status}</span>
        </li>
      `
    )
    .join('');
}

function renderAssets() {
  const list = document.getElementById('assetList');
  list.innerHTML = assets
    .map(
      (item) => `
        <div class="item-row">
          <div>
            <strong>${item.name}</strong>
            <div class="meta">${item.location}</div>
          </div>
          <span class="badge medium">${item.status}</span>
        </div>
      `
    )
    .join('');
}

function renderGps() {
  const list = document.getElementById('gpsList');
  list.innerHTML = gpsRoutes
    .map(
      (item) => `
        <div class="item-row">
          <div>
            <strong>${item.name}</strong>
            <div class="meta">${item.location}</div>
          </div>
          <span class="badge low">${item.status}</span>
        </div>
      `
    )
    .join('');
}

function renderSchedule() {
  const list = document.getElementById('scheduleList');
  list.innerHTML = schedules
    .map(
      (item) => `
        <div class="item-row">
          <div>
            <strong>${item.task}</strong>
            <div class="meta">Planned maintenance window</div>
          </div>
          <span class="badge medium">${item.date}</span>
        </div>
      `
    )
    .join('');
}

function renderProjects() {
  const list = document.getElementById('projectList');
  list.innerHTML = projects
    .map(
      (item) => `
        <div class="item-row">
          <div>
            <strong>${item.title}</strong>
            <div class="meta">${item.progress} complete</div>
          </div>
          <span class="badge high">${item.progress}</span>
        </div>
      `
    )
    .join('');
}

function renderSupport() {
  const list = document.getElementById('supportStats');
  list.innerHTML = support
    .map(
      (item) => `
        <div class="support-card">
          <span>${item.label}</span>
          <strong>${item.value}</strong>
        </div>
      `
    )
    .join('');
}

function updateHeroTasks() {
  document.getElementById('heroTasks').textContent = workOrders.length;
}

document.getElementById('workOrderForm').addEventListener('submit', (event) => {
  event.preventDefault();
  const title = document.getElementById('title').value;
  const location = document.getElementById('location').value;
  const priority = document.getElementById('priority').value;

  workOrders.unshift({ title, location, priority });
  renderWorkOrders();
  updateHeroTasks();
  event.target.reset();
});

renderStats();
renderWorkOrders();
renderReports();
renderOsha();
renderAssets();
renderGps();
renderSchedule();
renderProjects();
renderSupport();
updateHeroTasks();

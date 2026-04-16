const publications = [
  {
    id: 7,
    title: "Twisting the P-Series with Logarithmic Function — An Indicator for Quantum System Deviation",
    type: "Thesis",
    posted_date: "2025-10-24",
    description: "An analytical study on the behavior of P-Series under logarithmic transformations and its implications for quantum state deviations.",
    public_url: "https://figshare.com/articles/thesis/UntitledTwisting_the_P-Series_with_Logarithmic_FunctionAn_Indicator_for_Quantum_System_Deviation_Item/30438497?file=59024339",
    pdf_url: "https://drive.google.com/file/d/10nIu-YMJWwYUWEu9VRxADjbZ3F1BHSoF/view?usp=drivesdk",
  },
  {
    id: 1,
    title: "Gravitational Acceleration Formula (Full Form) In 2025",
    type: "Presentation",
    posted_date: "2025-10-04",
    description: "A comprehensive derivation of the gravitational acceleration formula incorporating modern constants.",
    public_url: "https://figshare.com/articles/presentation/Gravitational_Acceleration_Formula_Full_Form_In2025/30277669",
    pdf_url: "https://drive.google.com/file/d/1FzwO6z56mpJH_zzT7tOT_jIAFMc7y0qw/view?usp=drivesdk",
  },
  {
    id: 2,
    title: "A Mathematical Framework for Comparing Binocular Vision and Wave Interference",
    type: "Thesis",
    posted_date: "2025-08-30",
    description: "Establishing a formal bridge between biological vision systems and physical wave dynamics.",
    public_url: "https://figshare.com/articles/thesis/A_Mathematical_Framework_forComparing_Binocular_Vision_andWave_Interference/30016591",
    pdf_url: "https://drive.google.com/file/d/1_d3gXOHXRMe-v2i1igExkARMyLhO9ji4/view?usp=drivesdk",
  },
  {
    id: 3,
    title: "Root-Power Arithmetic ⊛ Universe",
    type: "Thesis",
    posted_date: "2025-08-27",
    description: "Exploration of unconventional arithmetic operations within theoretical physics frameworks.",
    public_url: "https://figshare.com/articles/thesis/Root-Power_Arithmetic_Universe/29992411",
    pdf_url: "https://drive.google.com/file/d/1fUiFWi10wJgIwjCqT0eSq6oVruIivnyS/view?usp=drivesdk",
  },
  {
    id: 4,
    title: "A Swiss Conditional Framework for Legendre's Conjecture",
    type: "Thesis",
    posted_date: "2025-08-22",
    description: "A proposed proof structure and conditional logic addressing Legendre's prime number distribution.",
    public_url: "https://figshare.com/articles/thesis/A_Swiss_Conditional_Framework_for_Legendre_s_Conjecture/29967043",
    pdf_url: "https://drive.google.com/file/d/1KP5noNyxybRD3otmhZvNBgYJ-OAOOwfG/view?usp=drivesdk",
  },
  {
    id: 5,
    title: "Twisting Equations From Discrete Sums to Continuous Truths",
    type: "Thesis",
    posted_date: "2025-08-16",
    description: "Methodology for the transition between discrete mathematical sums and continuous functional analysis.",
    public_url: "https://figshare.com/articles/thesis/TWISTING_EQUATIONS_FROM_DISCRETE_SUMS_TO_CONTINUOUSTRUTHS/29924387",
    pdf_url: "https://drive.google.com/file/d/1el29NzaaAESovQJFI4csDVvbsF-Lvvyj/view?usp=drivesdk",
  },
  {
    id: 6,
    title: "A Study of the Modified Dirichlet Difference Function δ(s) and Its Analytical Behaviour Near the Critical Line",
    type: "Thesis",
    posted_date: "2025-08-05",
    description: "Detailed investigation into the Dirichlet difference function and its implications for the Riemann Hypothesis.",
    public_url: "https://figshare.com/articles/thesis/SwissRh_DeltaZeta_RH_2025_pdf_pdf/29829023",
    pdf_url: "https://drive.google.com/file/d/1GbFIYU18699cOltsGcY2poi4KjZdcecD/view?usp=drivesdk",
  }
];

let currentFilter = 'All';

function renderPublications() {
    const container = document.getElementById('publications-container');
    const filtered = currentFilter === 'All' ? publications : publications.filter(p => p.type === currentFilter);
    const sorted = filtered.sort((a, b) => new Date(b.posted_date) - new Date(a.posted_date));

    container.innerHTML = '';

    sorted.forEach(pub => {
        const item = document.createElement('article');
        item.className = "border-l-4 border-gray-200 pl-6 py-2 hover:border-[#002147] transition-colors";
        item.innerHTML = `
            <div class="text-[10px] font-bold text-[#002147] uppercase tracking-widest mb-1">${pub.type} — ${new Date(pub.posted_date).getFullYear()}</div>
            <h3 class="text-xl font-serif font-bold text-gray-900 mb-2">${pub.title}</h3>
            <p class="text-gray-600 text-sm italic mb-4">${pub.description}</p>
            <div class="flex gap-4">
                <a href="${pub.public_url}" target="_blank" class="text-xs font-bold text-[#002147] hover:underline flex items-center gap-1">
                    SOURCE (FIGSHARE) <i data-lucide="external-link" class="h-3 w-3"></i>
                </a>
                <a href="${pub.pdf_url}" target="_blank" class="text-xs font-bold text-gray-400 hover:text-[#002147] flex items-center gap-1 transition-colors">
                    FULL TEXT (PDF) <i data-lucide="file-text" class="h-3 w-3"></i>
                </a>
            </div>
        `;
        container.appendChild(item);
    });
    lucide.createIcons();
}

document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilter = btn.getAttribute('data-filter');
        renderPublications();
    });
});

document.getElementById('year').textContent = new Date().getFullYear();
renderPublications();

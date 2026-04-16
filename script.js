const publications = [
  {
    id: 7,
    title: "Twisting the P-Series with Logarithmic Function — An Indicator for Quantum System Deviation",
    type: "Thesis",
    posted_date: "2025-10-24",
    description: "Thesis on Twisting the P-Series with Logarithmic Function — An Indicator for Quantum System Deviation.",
    public_url: "https://figshare.com/articles/thesis/UntitledTwisting_the_P-Series_with_Logarithmic_FunctionAn_Indicator_for_Quantum_System_Deviation_Item/30438497?file=59024339",
    pdf_url: "https://drive.google.com/file/d/10nIu-YMJWwYUWEu9VRxADjbZ3F1BHSoF/view?usp=drivesdk",
  },
  {
    id: 1,
    title: "Gravitational Acceleration Formula (Full Form) In 2025",
    type: "Presentation",
    posted_date: "2025-10-04",
    description: "Presentation on gravitational acceleration formulas in 2025.",
    public_url: "https://figshare.com/articles/presentation/Gravitational_Acceleration_Formula_Full_Form_In2025/30277669",
    pdf_url: "https://drive.google.com/file/d/1FzwO6z56mpJH_zzT7tOT_jIAFMc7y0qw/view?usp=drivesdk",
  },
  {
    id: 2,
    title: "A Mathematical Framework for Comparing Binocular Vision and Wave Interference",
    type: "Thesis",
    posted_date: "2025-08-30",
    description: "Thesis comparing binocular vision and wave interference mathematically.",
    public_url: "https://figshare.com/articles/thesis/A_Mathematical_Framework_forComparing_Binocular_Vision_andWave_Interference/30016591",
    pdf_url: "https://drive.google.com/file/d/1_d3gXOHXRMe-v2i1igExkARMyLhO9ji4/view?usp=drivesdk",
  },
  {
    id: 3,
    title: "Root-Power Arithmetic ⊛ Universe",
    type: "Thesis",
    posted_date: "2025-08-27",
    description: "Thesis exploring root-power arithmetic in a universal context.",
    public_url: "https://figshare.com/articles/thesis/Root-Power_Arithmetic_Universe/29992411",
    pdf_url: "https://drive.google.com/file/d/1fUiFWi10wJgIwjCqT0eSq6oVruIivnyS/view?usp=drivesdk",
  },
  {
    id: 4,
    title: "A Swiss Conditional Framework for Legendre's Conjecture",
    type: "Thesis",
    posted_date: "2025-08-22",
    description: "Thesis proposing a conditional framework for Legendre's conjecture.",
    public_url: "https://figshare.com/articles/thesis/A_Swiss_Conditional_Framework_for_Legendre_s_Conjecture/29967043",
    pdf_url: "https://drive.google.com/file/d/1KP5noNyxybRD3otmhZvNBgYJ-OAOOwfG/view?usp=drivesdk",
  },
  {
    id: 5,
    title: "Twisting Equations From Discrete Sums to Continuous Truths",
    type: "Thesis",
    posted_date: "2025-08-16",
    description: "Thesis on transforming discrete sums into continuous equations.",
    public_url: "https://figshare.com/articles/thesis/TWISTING_EQUATIONS_FROM_DISCRETE_SUMS_TO_CONTINUOUSTRUTHS/29924387",
    pdf_url: "https://drive.google.com/file/d/1el29NzaaAESovQJFI4csDVvbsF-Lvvyj/view?usp=drivesdk",
  },
  {
    id: 6,
    title: "A Study of the Modified Dirichlet Difference Function δ(s) and Its Analytical Behaviour Near the Critical Line",
    type: "Thesis",
    posted_date: "2025-08-05",
    description: "Thesis on delta-regularized zeta function and its relation to the Riemann Hypothesis.",
    public_url: "https://figshare.com/articles/thesis/SwissRh_DeltaZeta_RH_2025_pdf_pdf/29829023",
    pdf_url: "https://drive.google.com/file/d/1GbFIYU18699cOltsGcY2poi4KjZdcecD/view?usp=drivesdk",
  }
];

let currentFilter = 'All';

function renderPublications() {
    const container = document.getElementById('publications-container');
    const countSpan = document.getElementById('publication-count');
    const filtered = currentFilter === 'All' ? publications : publications.filter(p => p.type === currentFilter);
    const sorted = filtered.sort((a, b) => new Date(b.posted_date) - new Date(a.posted_date));

    countSpan.textContent = `(${sorted.length})`;
    container.innerHTML = '';

    sorted.forEach(pub => {
        const card = document.createElement('div');
        card.className = "pub-card group p-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:border-black transition-all duration-300";
        card.innerHTML = `
            <div class="flex flex-col gap-2">
                <div class="flex items-center gap-2">
                    <span class="text-[10px] font-bold px-2 py-0.5 rounded bg-gray-100 text-gray-600 uppercase tracking-widest">${pub.type}</span>
                    <span class="text-[10px] text-gray-400 font-medium">${new Date(pub.posted_date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                </div>
                <h3 class="text-lg font-bold text-gray-900 leading-tight">${pub.title}</h3>
                <p class="text-gray-500 text-sm leading-relaxed mt-1 font-light">${pub.description}</p>
                <div class="mt-4 flex flex-wrap gap-6">
                    <a href="${pub.public_url}" target="_blank" class="text-[11px] font-bold text-black uppercase tracking-[0.15em] inline-flex items-center gap-1.5 hover:opacity-50 transition-opacity">
                        Figshare <i data-lucide="external-link" class="h-3 w-3"></i>
                    </a>
                    <a href="${pub.pdf_url}" target="_blank" class="text-[11px] font-bold text-gray-400 uppercase tracking-[0.15em] inline-flex items-center gap-1.5 hover:text-black transition-colors">
                        PDF Download <i data-lucide="arrow-down-to-line" class="h-3 w-3"></i>
                    </a>
                </div>
            </div>
        `;
        container.appendChild(card);
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

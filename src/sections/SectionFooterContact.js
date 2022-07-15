export default function FooterContact() {
  return (
    <div class="container md:my-24 my-16">
      <div class="grid grid-cols-1 text-center">
        <h3 class="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Vous avez des questions ?</h3>

        <p class="text-slate-400 max-w-xl mx-auto mb-4 ">
          J'ai également réalisé de nombreux projets en entrepise que je ne peux pas montrer sur mon portfolio.
        </p>
        <p class="text-slate-400 max-w-xl mx-auto">
          N'hésitez pas à me contacter. Je suis actuellement à la recherche d'une formation UX Design d'une durée de 12 mois en alternance.
        </p>
        <div class="mt-6">
          <a
            href="contact.html"
            class="btn bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white rounded-md mr-2 mt-2">
            <i class="uil uil-envelope"></i> Me contacter
          </a>
        </div>
      </div>
    </div>
  );
}
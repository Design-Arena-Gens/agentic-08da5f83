import { SectionHeader } from '@/components/SectionHeader';
import { RegionCard } from '@/components/RegionCard';
import { Timeline } from '@/components/Timeline';
import {
  ambienceMatrix,
  enemyArchetypes,
  factionDynamics,
  globalDestinations,
  lootLadder,
  parisDistricts,
  storyBeats,
  technologyStack,
  vehicleNetwork
} from '@/data/world';

export default function HomePage() {
  return (
    <main>
      <section className="panel panel-grid" style={{ marginBottom: '4rem' }}>
        <div className="chip-row" style={{ marginBottom: '1.5rem' }}>
          <span className="chip">Jeu de survie coopératif</span>
          <span className="chip">Pixel art isométrique</span>
          <span className="chip">Progression mondiale</span>
        </div>
        <h1 className="title">World Decay</h1>
        <p className="subtitle" style={{ marginTop: '1.25rem' }}>
          Mettez un genou à terre dans un Paris en ruine avant de lancer votre reconquête planétaire. Construisez une base
          vivante, coopérez en ligne et affrontez des menaces qui évoluent à mesure que le monde succombe à l’infection.
        </p>
        <div className="glow-divider" />
        <div className="content-columns">
          <div className="surface-emphasis">
            <h3 style={{ fontFamily: 'var(--font-jura)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '1rem' }}>
              Paris : point zéro
            </h3>
            <p style={{ color: 'var(--text-secondary)' }}>
              Dès le premier jour, les survivants consolident le 13ᵉ arrondissement. Chaque session quotidienne débloque de
              nouveaux quartiers, révélant des strates narratives et des panoramas isométriques ultra détaillés. Des façades
              haussmanniennes éventrées aux catacombes phosphorescentes, World Decay rend hommage à une Europe post-traumatique.
            </p>
          </div>
          <div className="panel-grid" style={{ padding: '1.75rem', borderRadius: '20px', background: 'rgba(12,14,19,0.6)' }}>
            <Timeline
              items={storyBeats.map(({ chapter, beat }, index) => ({
                title: chapter,
                description: beat,
                emphasis: index === storyBeats.length - 1 ? 'Clôturez l’épidémie au sommet du monde.' : undefined
              }))}
            />
          </div>
        </div>
        <div style={{ marginTop: '2.5rem' }}>
          <a className="cta" href="#progression">
            <span>Découvrir la progression</span>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M5 12h14M13.5 6.5L19 12l-5.5 5.5"
                stroke="#090a0d"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </section>

      <section className="panel section-gap" id="progression">
        <SectionHeader
          eyebrow="Paris en éclats"
          title="Six strates urbaines à reconquérir"
          subtitle="Chaque quartier ajoute une mécanique coopérative : exploration verticale, sièges nocturnes, missions souterraines et affrontements scénarisés."
        />
        <div className="grid grid-cols-3" style={{ marginTop: '2rem' }}>
          {parisDistricts.map((district) => (
            <RegionCard
              key={district.name}
              title={district.name}
              subtitle={district.role}
              description={district.focus}
              bulletPoints={district.features}
            />
          ))}
        </div>
      </section>

      <section className="panel section-gap">
        <SectionHeader
          eyebrow="Carte du monde évolutive"
          title="Expéditions internationales et biomes corrompus"
          subtitle="Le hub parisien sert de passerelle vers des missions instanciées. Chaque pays débloque des ressources uniques, des mécaniques climatiques et un archétype d’ennemi inédit."
        />
        <div className="grid grid-cols-3" style={{ marginTop: '2rem' }}>
          {globalDestinations.map((destination) => (
            <div key={destination.city} className="isometric-card" style={{ borderColor: 'rgba(255,255,255,0.12)' }}>
              <div className="chip-row" style={{ marginBottom: '0.85rem' }}>
                <span className="chip">{destination.biome}</span>
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600 }}>{destination.city}</h3>
              <p style={{ color: 'var(--text-secondary)', margin: '0.75rem 0' }}>{destination.threats}</p>
              <div className="surface-emphasis" style={{ padding: '1rem', background: 'rgba(12,14,19,0.72)' }}>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
                  <span className="tag-highlight">Récompense :</span> {destination.reward}
                </p>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', marginTop: '0.75rem' }}>
                  <span className="tag-highlight">Spécificité :</span> {destination.twist}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="panel section-gap">
        <SectionHeader
          eyebrow="Base & coopération"
          title="Fortifiez votre bastion et gérez une communauté vivante"
          subtitle="Construisez, améliorez et partagez des infrastructures qui persistent entre les sessions quotidiennes."
        />
        <div className="content-columns" style={{ marginTop: '2rem' }}>
          <div className="grid">
            <div className="surface-emphasis">
              <h3 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '0.75rem' }}>Modules de base</h3>
              <p style={{ color: 'var(--text-secondary)' }}>
                Constructions empilables en voxels isométriques : ateliers, dortoirs, salles de commandes, fermes hydroponiques
                et générateurs modulaires alimentés par l’énergie récoltée à Berlin.
              </p>
            </div>
            <div className="surface-emphasis">
              <h3 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '0.75rem' }}>Défenses automatisées</h3>
              <p style={{ color: 'var(--text-secondary)' }}>
                Tourelles personnalisables, murs électrifiés et drones patrouilleurs synchronisés. Les joueurs peuvent partager
                des schémas de défense via le réseau de faction et planifier des raids coordonnés.
              </p>
            </div>
          </div>
          <div className="panel-grid" style={{ padding: '2rem 1.75rem', borderRadius: '20px' }}>
            <SectionHeader
              eyebrow="Rôles de survivants"
              title="Spécialistes jouables & PNJ"
              subtitle="Recrutez des PNJ uniques, ou laissez vos coéquipiers incarner leurs archétypes complémentaires."
            />
            <ul className="list-inline" style={{ marginTop: '1rem' }}>
              <li>Ingénieur : optimisation énergétique & drones réparateurs</li>
              <li>Médecin : gestion des traumas, sérums contre les mutations</li>
              <li>Sniper : couverture longue distance dans les missions verticales</li>
              <li>Analyste : bonus de réputation, négociations entre factions</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="panel section-gap">
        <SectionHeader
          eyebrow="Factions dynamiques"
          title="Réseau social post-apocalyptique"
          subtitle="Trois blocs majeurs influencent l’économie mondiale. Chaque décision coopérative modifie la réputation globale de votre escouade."
        />
        <div className="grid grid-cols-3" style={{ marginTop: '2rem' }}>
          {factionDynamics.map((faction) => (
            <div key={faction.name} className="isometric-card" style={{ borderColor: 'rgba(92,212,255,0.25)' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem' }}>{faction.name}</h3>
              <p className="tag-highlight" style={{ marginBottom: '0.75rem' }}>
                {faction.alignment}
              </p>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '0.85rem' }}>{faction.specialty}</p>
              <p style={{ color: 'var(--text-secondary)' }}>{faction.influence}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="panel section-gap">
        <SectionHeader
          eyebrow="Hostilité omniprésente"
          title="Écologie d’ennemis évolutive"
          subtitle="Zombies, mutants et humains rivaux se répondent pour imposer un rythme de survie haletant."
        />
        <div className="grid grid-cols-3" style={{ marginTop: '2rem' }}>
          {enemyArchetypes.map((enemy) => (
            <div key={enemy.label} className="mood-card" style={{ minHeight: '200px' }}>
              <h4>{enemy.label}</h4>
              <p>{enemy.behaviour}</p>
              <p style={{ color: 'var(--text-secondary)', marginTop: '0.85rem' }}>
                <span className="tag-highlight">Contre-mesure :</span> {enemy.counter}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="panel section-gap">
        <SectionHeader
          eyebrow="Loot & progression"
          title="Un escalier de raretés quotidien"
          subtitle="Fouillez, sécurisez et échangez des ressources. Les objets légendaires exigent des expéditions coordonnées dans des zones à haut risque."
        />
        <div className="grid grid-cols-2" style={{ marginTop: '2rem' }}>
          <div className="panel-grid" style={{ padding: '1.5rem', borderRadius: '20px' }}>
            {lootLadder.map((loot) => (
              <div key={loot.tier} style={{ marginBottom: '1.2rem' }}>
                <h3
                  style={{
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    color: loot.tier === 'Légendaire' ? 'var(--accent-amber)' : 'var(--text-primary)'
                  }}
                >
                  <span
                    style={{
                      display: 'inline-block',
                      width: '10px',
                      height: '10px',
                      borderRadius: '999px',
                      background: loot.color,
                      boxShadow: `0 0 12px ${loot.color}`,
                      marginRight: '0.6rem'
                    }}
                  />
                  {loot.tier}
                </h3>
                <p style={{ color: 'var(--text-secondary)', marginTop: '0.35rem' }}>{loot.description}</p>
              </div>
            ))}
          </div>
          <div className="surface-emphasis">
            <h3 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '0.85rem' }}>Progression mondiale</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '0.9rem' }}>
              Chaque journée serveur débloque une nouvelle carte et introduit un boss légendaire. Les joueurs doivent organiser
              leurs horaires, partager leurs bâtiments et optimiser le carburant mondial pour se déplacer entre les continents.
            </p>
            <p style={{ color: 'var(--text-secondary)' }}>
              Les factions peuvent négocier des corridors aériens, tandis que les véhicules légendaires permettent d’ouvrir des
              routes express. Les joueurs solo bénéficient d’alliés PNJ pour rester compétitifs dans les récits saisonniers.
            </p>
          </div>
        </div>
      </section>

      <section className="panel section-gap">
        <SectionHeader
          eyebrow="Flotte motorisée"
          title="Logistique et mobilité stratégique"
          subtitle="Les véhicules sont l’épine dorsale de votre reconquête. Chaque machine accepte des modules récupérés à travers le monde."
        />
        <div className="grid grid-cols-2" style={{ marginTop: '2rem' }}>
          {vehicleNetwork.map((vehicle) => (
            <div key={vehicle.name} className="frosted">
              <h3 style={{ fontSize: '1.2rem', fontWeight: 600 }}>{vehicle.name}</h3>
              <p style={{ color: 'var(--text-secondary)', margin: '0.75rem 0' }}>{vehicle.utility}</p>
              <p style={{ fontSize: '0.85rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--accent-cyan)' }}>
                Upgrades clés
              </p>
              <ul style={{ marginTop: '0.5rem', color: 'var(--text-secondary)', paddingLeft: '1.2rem' }}>
                {vehicle.upgrades.map((upgrade) => (
                  <li key={upgrade} style={{ marginBottom: '0.35rem' }}>
                    {upgrade}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="panel section-gap">
        <SectionHeader
          eyebrow="Ambiance & technologie"
          title="Un monde vivant, hostile et poétique"
          subtitle="World Decay mélange atmosphère sonore, météo dynamique et infrastructure en ligne robuste."
        />
        <div className="grid grid-cols-2" style={{ marginTop: '2rem' }}>
          <div>
            <div className="mood-grid">
              {ambienceMatrix.map((ambience) => (
                <div key={ambience.title} className="mood-card">
                  <h4>{ambience.title}</h4>
                  <p>{ambience.detail}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="surface-emphasis">
            <h3 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '0.85rem' }}>Pile technologique</h3>
            <ul style={{ color: 'var(--text-secondary)', paddingLeft: '1.2rem' }}>
              {technologyStack.map((item) => (
                <li key={item} style={{ marginBottom: '0.55rem' }}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="panel section-gap" style={{ marginBottom: '4rem' }}>
        <SectionHeader
          eyebrow="Objectif final"
          title="Reconstruire l’avant-poste mondial"
          subtitle="Unifier les factions, purifier la planète et révéler les secrets enfouis sous la glace arctique."
          align="center"
        />
        <p className="subtitle" style={{ textAlign: 'center', marginInline: 'auto' }}>
          Le dernier chapitre se déroule dans une station de recherche abandonnée, enfouie sous le Pôle Nord. Les joueurs doivent
          activer un réseau mondial de purification, décider du sort de la contamination et choisir quelles factions survivront au
          monde d’après. World Decay conclut son récit sur un dilemme : stabiliser l’humanité ou embrasser une nouvelle mutation.
        </p>
      </section>
    </main>
  );
}

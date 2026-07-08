const MapfArticleContent = () => {
  return (
    <div className="space-y-6 font-['Source_Serif_4',Georgia,serif] text-lg leading-[1.8] text-gray-800">
      <p>
        If you have ever ordered something online and received it the next day, you
        likely have automated warehouse robots to thank. In massive Amazon
        order-fulfillment centers, hundreds of autonomous robots navigate the floor,
        picking up inventory pods and transporting them to stationary workers. To do
        this efficiently, facilities use floor stickers to delineate a grid for
        navigation.
      </p>

      <p>
        However, path planning in these environments is remarkably tricky. Most of the
        warehouse is dedicated to storage, creating narrow corridors where robots
        carrying bulky pods cannot easily pass one another. This challenge sits at the
        heart of Multi-Agent Path Finding (MAPF).
      </p>

      <h3 className="mt-10 text-2xl font-bold text-gray-900">What is MAPF?</h3>

      <p>
        At its core, MAPF is the problem of finding collision-free paths for a team of
        agents moving from start locations to assigned goal cells on a grid.
      </p>

      <ul className="list-disc space-y-2 pl-6">
        <li>
          <span className="font-semibold">The objective:</span> minimize the sum of
          travel times (or path costs) for all agents.
        </li>
        <li>
          <span className="font-semibold">The rules:</span> agents move in discrete
          timesteps (up, down, left, right, or wait).
        </li>
        <li>
          <span className="font-semibold">The constraints:</span> agents cannot trigger
          a vertex collision (occupying the same cell at the same time) or an edge
          collision (crossing the same edge in opposite directions simultaneously).
        </li>
      </ul>

      <p>
        Solving this problem optimally is incredibly difficult—it is classified as
        NP-hard. Searching for a joint path by considering all agents simultaneously
        scales exponentially and is too slow for real-world use.
      </p>

      <h3 className="mt-10 text-2xl font-bold text-gray-900">
        Foundational Approaches: Prioritized Planning vs. CBS
      </h3>

      <p>
        To bypass the slow nature of joint-space planning, researchers developed
        specialized algorithms. Two of the most foundational are Prioritized Planning
        (PP) and Conflict-Based Search (CBS).
      </p>

      <h4 className="mt-6 text-xl font-semibold text-gray-900">
        Prioritized Planning (PP)
      </h4>

      <ul className="list-disc space-y-2 pl-6">
        <li>
          <span className="font-semibold">How it works:</span> agents are assigned a
          strict priority ranking. The algorithm plans paths one agent at a time,
          forcing lower-priority agents to route around the established paths of
          higher-priority ones.
        </li>
        <li>
          <span className="font-semibold">The trade-off:</span> while PP is
          exceptionally fast, it is both suboptimal and incomplete, meaning it might
          fail to find a solution even if a valid one exists.
        </li>
      </ul>

      <h4 className="mt-6 text-xl font-semibold text-gray-900">
        Conflict-Based Search (CBS)
      </h4>

      <ul className="list-disc space-y-2 pl-6">
        <li>
          <span className="font-semibold">How it works:</span> CBS is a two-level
          algorithm. On the low level, it plans the shortest independent path for each
          agent, ignoring others. If paths collide, the high level steps in, branching
          a constraint tree to force one agent or the other to avoid the conflicting
          cell or edge.
        </li>
        <li>
          <span className="font-semibold">The trade-off:</span> CBS is complete and
          optimal, but for large warehouses with hundreds of agents, the constraint
          tree grows too large, requiring immense computational power.
        </li>
      </ul>

      <h3 className="mt-10 text-2xl font-bold text-gray-900">
        Scaling Up: The Modern Era of MAPF Solvers
      </h3>

      <p>
        When you have thousands of robots operating under strict time constraints,
        perfectly optimal paths are less important than finding good paths quickly.
        Researchers have built powerful suboptimal algorithms to scale MAPF for
        industrial use.
      </p>

      <h4 className="mt-6 text-xl font-semibold text-gray-900">
        1. Explicit Estimation CBS (EECBS)
      </h4>

      <p>
        EECBS is a bounded-suboptimal algorithm, meaning it promises a solution that is
        no worse than a specific, user-defined percentage away from the absolute
        optimal cost.
      </p>

      <ul className="list-disc space-y-2 pl-6">
        <li>
          <span className="font-semibold">Overcoming focal search limits:</span>{" "}
          previous algorithms like ECBS suffered from thrashing, getting stuck in local
          areas of the search tree when heuristics were negatively correlated.
        </li>
        <li>
          <span className="font-semibold">Explicit estimation:</span> EECBS solves this
          by using Explicit Estimation Search (EES) and online learning to inadmissibly
          but effectively estimate the true cost of paths, guiding the search directly
          to valid solutions.
        </li>
        <li>
          <span className="font-semibold">Modern enhancements:</span> EECBS is heavily
          upgraded with techniques like bypassing conflicts, prioritizing cardinal
          conflicts, and reasoning about symmetrical path geometries to keep the search
          tree small.
        </li>
      </ul>

      <h4 className="mt-6 text-xl font-semibold text-gray-900">
        2. MAPF-LNS2 (Large Neighborhood Search)
      </h4>

      <p>
        When warehouses hit unprecedented congestion levels, algorithms that build
        paths from scratch often fail entirely. MAPF-LNS2 takes a radically different
        approach: repairing instead of restarting.
      </p>

      <ul className="list-disc space-y-2 pl-6">
        <li>
          <span className="font-semibold">The repair loop:</span> MAPF-LNS2 accepts a
          flawed plan containing collisions. It repeatedly selects a neighborhood (a
          subset of colliding agents) and replans their routes to decrease the total
          number of collisions until the entire grid is collision-free.
        </li>
        <li>
          <span className="font-semibold">Adaptive selection:</span> it uses adaptive
          LNS to intelligently switch between selecting agents based on their
          collision graphs, historical planning failures, or simple random selection to
          avoid getting stuck.
        </li>
        <li>
          <span className="font-semibold">Industrial scale:</span> powered by a highly
          efficient single-agent pathfinding algorithm called SIPPS (Safe Interval Path
          Planning with Soft constraints), MAPF-LNS2 runs drastically faster than
          previous state-of-the-art systems and has successfully planned collision-free
          paths for up to 8,000 agents in congested warehouse simulations.
        </li>
      </ul>
    </div>
  );
};

export default MapfArticleContent;

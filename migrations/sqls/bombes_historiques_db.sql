--
-- PostgreSQL database dump
--

-- Dumped from database version 11.2
-- Dumped by pg_dump version 11.2

-- Started on 2019-04-05 10:00:10

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 2828 (class 1262 OID 16400)
-- Name: bombes_historiques; Type: DATABASE; Schema: -; Owner: postgres
--


ALTER DATABASE bombes_historiques OWNER TO postgres;

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- TOC entry 196 (class 1259 OID 16401)
-- Name: bombes; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.bombes (
    nom text,
    reaction_chimique text,
    pays text,
    id integer NOT NULL,
    date_explosion date,
    puissance integer
);


ALTER TABLE public.bombes OWNER TO postgres;

--
-- TOC entry 2829 (class 0 OID 0)
-- Dependencies: 196
-- Name: COLUMN bombes.puissance; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON COLUMN public.bombes.puissance IS 'puissance en kt de TNT (TNT = 1)';


--
-- TOC entry 197 (class 1259 OID 16407)
-- Name: bombes_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.bombes_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.bombes_id_seq OWNER TO postgres;

--
-- TOC entry 2830 (class 0 OID 0)
-- Dependencies: 197
-- Name: bombes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.bombes_id_seq OWNED BY public.bombes.id;



ALTER TABLE ONLY public.bombes ALTER COLUMN id SET DEFAULT nextval('public.bombes_id_seq'::regclass);



--
-- TOC entry 2819 (class 0 OID 16401)
-- Dependencies: 196
-- Data for Name: bombes; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.bombes VALUES ('Tinderbox/Colwick', NULL, 'Grande-Bretagne', 10, '1980-04-26', 140);
INSERT INTO public.bombes VALUES ('DF-5A', NULL, 'Chine', 13, '1981-01-01', 5000);
INSERT INTO public.bombes VALUES ('Poudre noire', '2 KNO3 + 3 C + S → K2S + 3 CO2 + N2 ', 'Chine
', 5, '0840-01-01', 0);
INSERT INTO public.bombes VALUES ('TNT', '2 C7H5N3O6 → 3 N2 + 5 H2 + 12 CO + 2 C ', 'Allemagne
', 6, '1863-01-01', 1);
INSERT INTO public.bombes VALUES ('Arme nucléaire terroriste', 'n + 235U → Ba + Kr + 3 n ', 'Terroriste', 7, '0001-01-01', 10);
INSERT INTO public.bombes VALUES ('Little Boy', 'D + T → 4 He + n + 17,6 MeV ', 'États-Unis', 8, '1945-08-06', 15);
INSERT INTO public.bombes VALUES ('Fat Man', 'Noyau de plutonium 239 entouré de 5300lbs d''explosifs. ', 'États-Unis', 9, '1945-08-09', 27);
INSERT INTO public.bombes VALUES (NULL, 'D + D → 3 He + n + 3,3 MeV ', 'Corée du Nord', 11, '2017-09-03', 140);
INSERT INTO public.bombes VALUES ('Canopus', 'D + T → 4 He + n + 17,6 MeV', 'France', 12, '1968-08-24', 2600);
INSERT INTO public.bombes VALUES ('Ivy Mike', '7 Li + n → T + 4 He + n ', 'États-Unis', 14, '1952-11-01', 10400);
INSERT INTO public.bombes VALUES ('Castle Bravo', 'T + D → 4He + n → n + 6Li → 4He + T (et continue en boucle jusqu’à ce que ce soit impossible)', 'États-Unis', 15, '1954-03-01', 15000);
INSERT INTO public.bombes VALUES ('Tsar Bomba', '3 He + D → 4 He + p ', 'Russie', 16, '1961-10-01', 57000);





--
-- TOC entry 2832 (class 0 OID 0)
-- Dependencies: 197
-- Name: bombes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.bombes_id_seq', 20, true);




--
-- TOC entry 2695 (class 2606 OID 16417)
-- Name: bombes bombes_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.bombes
    ADD CONSTRAINT bombes_pkey PRIMARY KEY (id);


-- Completed on 2019-04-05 10:00:11

--
-- PostgreSQL database dump complete
--


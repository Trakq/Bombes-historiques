--
-- PostgreSQL database dump
--

-- Dumped from database version 11.2
-- Dumped by pg_dump version 11.2

-- Started on 2019-04-02 11:20:07

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
-- TOC entry 2822 (class 0 OID 16420)
-- Dependencies: 199
-- Data for Name: migrations; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.migrations VALUES (1, '/20190329133149-add-people', '2019-04-02 08:46:36.891');


--
-- TOC entry 2831 (class 0 OID 0)
-- Dependencies: 197
-- Name: bombes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.bombes_id_seq', 16, true);


--
-- TOC entry 2832 (class 0 OID 0)
-- Dependencies: 198
-- Name: migrations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.migrations_id_seq', 1, true);


-- Completed on 2019-04-02 11:20:07

--
-- PostgreSQL database dump complete
--

